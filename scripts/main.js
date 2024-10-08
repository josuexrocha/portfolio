// main.js

// Fonction pour vérifier et appliquer le mode sombre
function checkDarkMode() {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}

// Fonction pour basculer le mode sombre
function toggleDarkMode() {
  document.documentElement.classList.toggle("dark");
  localStorage.theme = document.documentElement.classList.contains("dark")
    ? "dark"
    : "light";
}

// Fonction pour créer le bouton de basculement du mode sombre
function setupDarkModeToggle() {
  const darkModeToggle = document.getElementById("darkModeToggle");
  if (darkModeToggle) {
    darkModeToggle.addEventListener("click", () => {
      toggleDarkMode();
      checkDarkMode();
    });
  } else {
    console.error("Dark mode toggle button not found");
  }
}

// Fonction pour animer le texte du héros
function animateHero() {
  gsap.to(".hero-title span", {
    opacity: 1,
    y: 0,
    duration: 0.4,
    stagger: 0.2,
  });
  gsap.to(".hero-subtitle", {
    opacity: 1,
    y: 0,
    duration: 0.4,
    delay: 0.4,
  });
  gsap.to(".modern-button", {
    opacity: 1,
    y: 0,
    duration: 0.4,
    stagger: 0.2,
    delay: 0.3,
  });
}

// Fonction pour animer l'image de profil
function animateProfileImage() {
  const image = document.querySelector(".profile-image");
  if (image) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            image.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(image);
  }
}

// Fonction pour animer les cartes de projet
function animateProjectCards() {
  const cards = document.querySelectorAll(".project-card");
  cards.forEach((card, index) => {
    gsap.fromTo(
      card,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: index * 0.2,
        scrollTrigger: {
          trigger: card,
          start: "top bottom-=100",
          toggleActions: "play none none reverse",
        },
      }
    );
  });
}

// Fonction pour gérer le scroll fluide
function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const href = this.getAttribute("href");
      if (href !== "#") {
        const targetElement = document.querySelector(href);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
          });
        }
      }
    });
  });
}

// Fonction pour animer le texte de la bio
function animateBioText() {
  const bioText = document.querySelector(".bio-text");
  if (bioText) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            bioText.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(bioText);
  }
}
function setupProjectCards() {
  const cards = document.querySelectorAll(".project-card");

  cards.forEach((card) => {
    const content = card.querySelector(".card-content");
    const hoverContent = card.querySelector(".card-hover");

    card.addEventListener("mouseenter", () => {
      hoverContent.style.opacity = "1";
      content.style.opacity = "0.7";
    });

    card.addEventListener("mouseleave", () => {
      hoverContent.style.opacity = "0";
      content.style.opacity = "1";
    });
  });
}

// Fonction d'initialisation
function init() {
  checkDarkMode();
  setupDarkModeToggle();
  animateHero();
  animateProfileImage();
  animateProjectCards();
  setupSmoothScroll();
  animateBioText();
  setupProjectCards();
}

// Exécuter les fonctions au chargement de la page
document.addEventListener("DOMContentLoaded", init);
