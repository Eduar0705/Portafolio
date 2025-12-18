/*==================== DOM ELEMENTS ====================*/
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");
const navLinks = document.querySelectorAll(".nav__link");
const sections = document.querySelectorAll("section[id]");
const header = document.getElementById("header");
const scrollUp = document.getElementById("scroll-up");
const skillsContent = document.getElementsByClassName("skills__content");
const skillsHeaders = document.querySelectorAll(".skills__header");
const projectsFilters = document.querySelectorAll(".projects__item");
const projectsCards = document.querySelectorAll(".projects__card");
const contactForm = document.getElementById("contactForm");

/*==================== UTILITY FUNCTIONS ====================*/
const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

const throttle = (func, wait) => {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, wait);
    }
  };
};

/*==================== NAVIGATION ====================*/
class Navigation {
  constructor() {
    this.init();
  }

  init() {
    this.setupEventListeners();
  }

  setupEventListeners() {
    // Menu toggle
    if (navToggle) {
      navToggle.addEventListener("click", (e) => {
        e.stopPropagation();
        this.toggleMenu();
      });
    }

    if (navClose) {
      navClose.addEventListener("click", () => this.hideMenu());
    }

    // Close menu when clicking on links
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        this.hideMenu();
      });
    });

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
      if (navMenu && navMenu.classList.contains("show-menu")) {
        if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
          this.hideMenu();
        }
      }
    });

    // Keyboard navigation
    if (navToggle) {
      navToggle.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          this.toggleMenu();
        }
      });
    }

    if (navClose) {
      navClose.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          this.hideMenu();
        }
      });
    }

    // Close menu on escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && navMenu.classList.contains("show-menu")) {
        this.hideMenu();
      }
    });
  }

  toggleMenu() {
    if (navMenu.classList.contains("show-menu")) {
      this.hideMenu();
    } else {
      this.showMenu();
    }
  }

  showMenu() {
    if (navMenu) {
      navMenu.classList.add("show-menu");
      if (navToggle) {
        navToggle.setAttribute("aria-expanded", "true");
      }
    }
  }

  hideMenu() {
    if (navMenu) {
      navMenu.classList.remove("show-menu");
      if (navToggle) {
        navToggle.setAttribute("aria-expanded", "false");
      }
    }
  }
}

/*==================== SKILLS ACCORDION ====================*/
class SkillsAccordion {
  constructor() {
    this.init();
  }

  init() {
    skillsHeaders.forEach(header => {
      header.addEventListener("click", () => this.toggleSkills(header));
      header.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          this.toggleSkills(header);
        }
      });
    });
  }

  toggleSkills(clickedHeader) {
    const parentNode = clickedHeader.parentNode;
    const itemClass = parentNode.className;
    const isOpen = itemClass.includes("skills__open");

    // Close all skills sections
    Array.from(skillsContent).forEach(content => {
      content.className = "skills__content skills__close";
    });

    // Update aria-expanded for all headers
    skillsHeaders.forEach(header => {
      header.setAttribute("aria-expanded", "false");
    });

    // Open clicked section if it was closed
    if (itemClass === "skills__content skills__close") {
      parentNode.className = "skills__content skills__open";
      clickedHeader.setAttribute("aria-expanded", "true");
    }
  }
}

/*==================== PROJECTS FILTER ====================*/
class ProjectsFilter {
  constructor() {
    this.init();
  }

  init() {
    projectsFilters.forEach(filter => {
      filter.addEventListener("click", () => this.filterProjects(filter));
      filter.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          this.filterProjects(filter);
        }
      });
    });
  }

  filterProjects(clickedFilter) {
    // Update active filter
    projectsFilters.forEach(filter => {
      filter.classList.remove("active-project");
      filter.setAttribute("aria-selected", "false");
    });

    clickedFilter.classList.add("active-project");
    clickedFilter.setAttribute("aria-selected", "true");

    // Filter projects
    const filterValue = clickedFilter.getAttribute("data-filter");

    projectsCards.forEach(card => {
      if (filterValue === "all") {
        card.style.display = "block";
        card.style.animation = "fadeInUp 0.6s ease forwards";
      } else {
        const hasClass = card.classList.contains(filterValue.substring(1));
        card.style.display = hasClass ? "block" : "none";
        if (hasClass) {
          card.style.animation = "fadeInUp 0.6s ease forwards";
        }
      }
    });
  }
}

/*==================== FORM VALIDATOR ====================*/
class FormValidator {
  constructor(formId) {
    this.form = document.getElementById(formId);
    this.emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    this.init();
  }

  init() {
    if (!this.form) return;

    this.setupEventListeners();
    this.setupRealTimeValidation();
  }

  setupEventListeners() {
    this.form.addEventListener("submit", (e) => this.handleSubmit(e));
  }

  setupRealTimeValidation() {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const subjectInput = document.getElementById("subject");
    const messageInput = document.getElementById("message");

    if (nameInput) {
      nameInput.addEventListener("input", () => this.validateField(nameInput, "nameError"));
    }

    if (emailInput) {
      emailInput.addEventListener("input", () => this.validateField(emailInput, "emailError", this.validateEmail.bind(this)));
    }

    if (subjectInput) {
      subjectInput.addEventListener("input", () => this.validateField(subjectInput, "subjectError"));
    }

    if (messageInput) {
      messageInput.addEventListener("input", () => this.validateField(messageInput, "messageError"));
    }
  }

  validateField(field, errorId, customValidator = null) {
    const value = field.value.trim();
    const errorElement = document.getElementById(errorId);

    if (!value) {
      this.setFieldError(field, errorElement, true);
      return false;
    }

    if (customValidator && !customValidator(value)) {
      this.setFieldError(field, errorElement, true);
      return false;
    }

    this.setFieldError(field, errorElement, false);
    return true;
  }

  validateEmail(email) {
    return this.emailRegex.test(email);
  }

  setFieldError(field, errorElement, hasError) {
    if (hasError) {
      field.classList.add("error");
      field.classList.remove("success");
      errorElement.style.display = "block";
    } else {
      field.classList.remove("error");
      field.classList.add("success");
      errorElement.style.display = "none";
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(this.form);
    const data = Object.fromEntries(formData);

    // Validate all fields
    const isNameValid = this.validateField(document.getElementById("name"), "nameError");
    const isEmailValid = this.validateField(document.getElementById("email"), "emailError", this.validateEmail.bind(this));
    const isSubjectValid = this.validateField(document.getElementById("subject"), "subjectError");
    const isMessageValid = this.validateField(document.getElementById("message"), "messageError");

    const formFeedback = document.getElementById("formFeedback");

    if (!isNameValid || !isEmailValid || !isSubjectValid || !isMessageValid) {
      this.showFeedback(formFeedback, "Por favor completa todos los campos correctamente.", "error");
      return;
    }

    this.submitForm(data, formFeedback);
  }

  submitForm(data, feedbackElement) {
    const submitButton = document.getElementById("submitButton");
    const buttonText = submitButton.querySelector(".button__text") || submitButton;

    // Show loading state
    submitButton.classList.add("loading");
    buttonText.textContent = "Enviando";

    // Simulate API call
    setTimeout(() => {
      const phone = "584145003573";
      const text = encodeURIComponent(
        `Nombre: ${data.name}\nEmail: ${data.email}\nAsunto: ${data.subject}\nMensaje: ${data.message}`
      );
      const url = `https://wa.me/${phone}?text=${text}`;

      // Reset button
      submitButton.classList.remove("loading");
      buttonText.textContent = "Enviar por WhatsApp";

      // Show success message
      this.showFeedback(feedbackElement, "¡Formulario completado con éxito! Redirigiendo a WhatsApp...", "success");

      // Redirect after delay
      setTimeout(() => {
        window.open(url, "_blank", "noopener,noreferrer");
        this.form.reset();
        this.clearValidationStates();
      }, 1500);
    }, 1000);
  }

  showFeedback(element, message, type) {
    element.textContent = message;
    element.className = `form-feedback ${type}`;
    element.style.display = "block";

    if (type === "success") {
      setTimeout(() => {
        element.style.display = "none";
      }, 3000);
    }
  }

  clearValidationStates() {
    const inputs = this.form.querySelectorAll(".contact__input");
    const errors = this.form.querySelectorAll(".error-message");

    inputs.forEach(input => {
      input.classList.remove("error", "success");
    });

    errors.forEach(error => {
      error.style.display = "none";
    });
  }
}

/*==================== SCROLL ANIMATIONS ====================*/
class ScrollAnimations {
  constructor() {
    this.init();
  }

  init() {
    this.setupScrollListeners();
    this.initRevealOnScroll();
    this.initSkillsAnimation();
  }

  setupScrollListeners() {
    const scrollHandler = throttle(() => {
      this.scrollActive();
      this.scrollHeader();
      this.scrollUp();
      this.revealOnScroll();
    }, 16); // ~60fps

    window.addEventListener("scroll", scrollHandler);
  }

  scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 50;
      const sectionId = current.getAttribute("id");
      const navLink = document.querySelector(`.nav__menu a[href*="${sectionId}"]`);

      if (navLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLink.classList.add("active-link");
        } else {
          navLink.classList.remove("active-link");
        }
      }
    });
  }

  scrollHeader() {
    if (window.scrollY >= 80) {
      header.classList.add("scroll-header");
    } else {
      header.classList.remove("scroll-header");
    }
  }

  scrollUp() {
    if (window.scrollY >= 560) {
      scrollUp.classList.add("show-scroll");
    } else {
      scrollUp.classList.remove("show-scroll");
    }
  }

  initRevealOnScroll() {
    const reveals = document.querySelectorAll(
      ".home__data, .about__img, .about__data, .skills__content, .projects__card, .contact__information, .contact__form"
    );

    reveals.forEach(reveal => {
      reveal.style.opacity = "0";
      reveal.style.transform = "translateY(50px)";
      reveal.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    });
  }

  revealOnScroll() {
    const reveals = document.querySelectorAll(
      ".home__data, .about__img, .about__data, .skills__content, .projects__card, .contact__information, .contact__form"
    );

    reveals.forEach(reveal => {
      const windowHeight = window.innerHeight;
      const elementTop = reveal.getBoundingClientRect().top;
      const elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveal.style.opacity = "1";
        reveal.style.transform = "translateY(0)";
      }
    });
  }

  initSkillsAnimation() {
    const skillsSection = document.getElementById("skills");
    if (!skillsSection) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.animateSkillBars();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(skillsSection);
  }

  animateSkillBars() {
    const skillBars = document.querySelectorAll(".skills__percentage");

    skillBars.forEach((bar, index) => {
      setTimeout(() => {
        const width = bar.style.width;
        bar.style.width = "0%";
        bar.style.transition = "width 2s ease-in-out";

        setTimeout(() => {
          bar.style.width = width;
        }, 100);
      }, index * 200);
    });
  }
}

/*==================== TYPING ANIMATION ====================*/
class TypingAnimation {
  constructor() {
    this.texts = [
      "Desarrollador Full Stack",
      "Programador Web",
      "Desarrollador Frontend",
      "Desarrollador Backend"
    ];
    this.currentIndex = 0;
    this.init();
  }

  init() {
    const subtitle = document.querySelector(".home__subtitle");
    if (subtitle) {
      setTimeout(() => this.typeWriter(subtitle), 1000);
    }
  }

  typeWriter(element) {
    const currentText = this.texts[this.currentIndex];
    let charIndex = 0;

    element.textContent = "";

    const typing = setInterval(() => {
      element.textContent += currentText[charIndex];
      charIndex++;

      if (charIndex === currentText.length) {
        clearInterval(typing);
        setTimeout(() => {
          this.currentIndex = (this.currentIndex + 1) % this.texts.length;
          this.typeWriter(element);
        }, 2000);
      }
    }, 100);
  }
}

/*==================== PARTICLES SYSTEM ====================*/
class ParticlesSystem {
  constructor() {
    this.particles = [];
    this.init();
  }

  init() {
    // Check if user prefers reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    this.createParticlesContainer();
    this.createParticles();
    this.addParticleStyles();
  }

  createParticlesContainer() {
    const particlesContainer = document.createElement("div");
    particlesContainer.className = "particles";
    particlesContainer.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: -1;
    `;
    document.body.appendChild(particlesContainer);
    this.container = particlesContainer;
  }

  createParticles() {
    for (let i = 0; i < 50; i++) {
      const particle = document.createElement("div");
      particle.className = "particle";
      particle.style.cssText = `
        position: absolute;
        width: 2px;
        height: 2px;
        background: var(--first-color);
        border-radius: 50%;
        opacity: 0.5;
        animation: float ${Math.random() * 10 + 10}s infinite linear;
        left: ${Math.random() * 100}%;
        animation-delay: ${Math.random() * 20}s;
      `;
      this.container.appendChild(particle);
    }
  }

  addParticleStyles() {
    if (document.querySelector("#particle-styles")) return;

    const style = document.createElement("style");
    style.id = "particle-styles";
    style.textContent = `
      @keyframes float {
        0% {
          transform: translateY(100vh) rotate(0deg);
          opacity: 0;
        }
        10% {
          opacity: 0.5;
        }
        90% {
          opacity: 0.5;
        }
        100% {
          transform: translateY(-100vh) rotate(360deg);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);
  }
}

/*==================== SMOOTH SCROLLING ====================*/
class SmoothScrolling {
  constructor() {
    this.init();
  }

  init() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute("href"));

        if (target) {
          const offsetTop = target.offsetTop - (header ? header.offsetHeight : 0);

          window.scrollTo({
            top: offsetTop,
            behavior: "smooth"
          });
        }
      });
    });
  }
}

/*==================== LOADING SCREEN ====================*/
class LoadingScreen {
  constructor() {
    this.loadingScreen = document.getElementById("loadingScreen");
    this.init();
  }

  init() {
    window.addEventListener("load", () => {
      setTimeout(() => this.hideLoadingScreen(), 500);
    });

    // Fallback in case load event doesn't fire
    setTimeout(() => this.hideLoadingScreen(), 3000);
  }

  hideLoadingScreen() {
    if (this.loadingScreen) {
      this.loadingScreen.classList.add("hidden");
      setTimeout(() => {
        this.loadingScreen.style.display = "none";
      }, 500);
    }
  }
}

/*==================== PERFORMANCE OPTIMIZATIONS ====================*/
class PerformanceOptimizer {
  constructor() {
    this.init();
  }

  init() {
    this.updateCopyrightYear();
    this.setupIntersectionObserver();
    this.preloadCriticalResources();
  }

  updateCopyrightYear() {
    const yearElement = document.getElementById("currentYear");
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
    }
  }

  setupIntersectionObserver() {
    // Lazy load images that are not in viewport
    const images = document.querySelectorAll('img[loading="lazy"]');

    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            if (!img.src && img.dataset.src) {
              img.src = img.dataset.src;
            }
            observer.unobserve(img);
          }
        });
      });

      images.forEach(img => imageObserver.observe(img));
    }
  }

  preloadCriticalResources() {
    // Preload critical images
    const criticalImages = [
      './img/Personal.jpg'
    ];

    criticalImages.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });
  }
}

/*==================== INITIALIZATION ====================*/
class Portfolio {
  constructor() {
    this.init();
  }

  init() {
    // Wait for DOM to be fully loaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.initializeComponents());
    } else {
      this.initializeComponents();
    }
  }

  initializeComponents() {
    // Initialize all components
    new LoadingScreen();
    new Navigation();
    new SkillsAccordion();
    new ProjectsFilter();
    new FormValidator('contactForm');
    new ScrollAnimations();
    new TypingAnimation();
    new ParticlesSystem();
    new SmoothScrolling();
    new PerformanceOptimizer();

    // Initial scroll reveal
    setTimeout(() => {
      const scrollAnimations = new ScrollAnimations();
      scrollAnimations.revealOnScroll();
    }, 100);
  }
}

/*==================== START APPLICATION ====================*/
new Portfolio();