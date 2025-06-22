/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close")

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu")
  })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu")
  })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link")

function linkAction() {
  const navMenu = document.getElementById("nav-menu")
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu")
}
navLink.forEach((n) => n.addEventListener("click", linkAction))

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName("skills__content"),
  skillsHeader = document.querySelectorAll(".skills__header")

function toggleSkills() {
  const itemClass = this.parentNode.className
  let i

  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills__content skills__close"
  }
  if (itemClass === "skills__content skills__close") {
    this.parentNode.className = "skills__content skills__open"
  }
}

skillsHeader.forEach((el) => {
  el.addEventListener("click", toggleSkills)
})

/*==================== PROJECTS MODAL ====================*/
const modalViews = document.querySelectorAll(".projects__modal"),
  modalBtns = document.querySelectorAll(".projects__button"),
  modalCloses = document.querySelectorAll(".projects__modal-close")

const modal = (modalClick) => {
  modalViews[modalClick].classList.add("active-modal")
}

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener("click", () => {
    modal(i)
  })
})

modalCloses.forEach((modalClose) => {
  modalClose.addEventListener("click", () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove("active-modal")
    })
  })
})

/*==================== PROJECTS FILTER ====================*/
const filters = document.querySelectorAll(".projects__item")

function activeFilter() {
  filters.forEach((filter) => {
    filter.classList.remove("active-project")
  })
  this.classList.add("active-project")
}

filters.forEach((filter) => {
  filter.addEventListener("click", activeFilter)
})

function filterProjects() {
  const filterValue = this.getAttribute("data-filter")
  const projectCards = document.querySelectorAll(".projects__card")

  projectCards.forEach((card) => {
    if (filterValue === "all") {
      card.style.display = "block"
    } else {
      if (card.classList.contains(filterValue.substring(1))) {
        card.style.display = "block"
      } else {
        card.style.display = "none"
      }
    }
  })
}

filters.forEach((filter) => {
  filter.addEventListener("click", filterProjects)
})

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]")

function scrollActive() {
  const scrollY = window.pageYOffset
  let sectionId

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 50
    sectionId = current.getAttribute("id")

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.add("active-link")
    } else {
      document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.remove("active-link")
    }
  })
}
window.addEventListener("scroll", scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
  const nav = document.getElementById("header")
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if (window.scrollY >= 80) nav.classList.add("scroll-header")
  else nav.classList.remove("scroll-header")
}
window.addEventListener("scroll", scrollHeader)

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up")
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (window.scrollY >= 560) scrollUp.classList.add("show-scroll")
  else scrollUp.classList.remove("show-scroll")
}
window.addEventListener("scroll", scrollUp)

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById("themeToggle")
const darkTheme = "dark-theme"
const iconTheme = "fa-sun"

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme")
const selectedIcon = localStorage.getItem("selected-icon")

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => (document.body.classList.contains(darkTheme) ? "dark" : "light")
const getCurrentIcon = () => (themeButton.classList.contains(iconTheme) ? "fa-moon" : "fa-sun")

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](darkTheme)
  themeButton.classList[selectedIcon === "fa-moon" ? "add" : "remove"](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme())
  localStorage.setItem("selected-icon", getCurrentIcon())
})

/*==================== CONTACT FORM ====================*/
const contactForm = document.getElementById("contactForm")

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    // Get form values
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const subject = document.getElementById("subject").value
    const message = document.getElementById("message").value

    // Simple validation
    if (name && email && subject && message) {
      // Simulate form submission
      alert("¡Mensaje enviado con éxito! Te contactaré pronto.")
      contactForm.reset()
    } else {
      alert("Por favor, completa todos los campos.")
    }
  })
}

/*==================== SCROLL REVEAL ANIMATION ====================*/
function revealOnScroll() {
  const reveals = document.querySelectorAll(
    ".home__data, .about__img, .about__data, .skills__content, .projects__card, .contact__information, .contact__form",
  )

  reveals.forEach((reveal) => {
    const windowHeight = window.innerHeight
    const elementTop = reveal.getBoundingClientRect().top
    const elementVisible = 150

    if (elementTop < windowHeight - elementVisible) {
      reveal.style.opacity = "1"
      reveal.style.transform = "translateY(0)"
    }
  })
}

window.addEventListener("scroll", revealOnScroll)

/*==================== TYPING ANIMATION ====================*/
let typewriterIndex = 0
const typewriterTexts = [
  "Desarrollador Full Stack",
  "Programador Web",
  "Desarrollador Frontend",
  "Desarrollador Backend",
]

function typeWriter() {
  const subtitle = document.querySelector(".home__subtitle")
  if (subtitle) {
    const currentText = typewriterTexts[typewriterIndex]
    let charIndex = 0

    subtitle.textContent = ""

    const typing = setInterval(() => {
      subtitle.textContent += currentText[charIndex]
      charIndex++

      if (charIndex === currentText.length) {
        clearInterval(typing)
        setTimeout(() => {
          typewriterIndex = (typewriterIndex + 1) % typewriterTexts.length
          typeWriter()
        }, 2000)
      }
    }, 100)
  }
}

// Start typing animation when page loads
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(typeWriter, 1000)
})

/*==================== SKILLS ANIMATION ====================*/
function animateSkillBars() {
  const skillBars = document.querySelectorAll(".skills__percentage")

  skillBars.forEach((bar) => {
    const percentage = bar.style.width || bar.className.match(/skills__(\w+)/)?.[1]
    if (percentage) {
      bar.style.width = "0%"
      setTimeout(() => {
        bar.style.transition = "width 2s ease-in-out"
        bar.style.width = getSkillPercentage(percentage)
      }, 500)
    }
  })
}

function getSkillPercentage(skill) {
  const percentages = {
    html: "95%",
    css: "90%",
    js: "80%",
    react: "70%",
    node: "75%",
    php: "60%",
    express: "70%",
    mysql: "65%",
    cpp: "85%",
    csharp: "80%",
    python: "70%",
    java: "65%",
  }
  return percentages[skill] || "0%"
}

const skillsSection = document.getElementById("skills")
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateSkillBars()
      }
    })
  },
  { threshold: 0.5 },
)

if (skillsSection) {
  observer.observe(skillsSection)
}

/*==================== SMOOTH SCROLLING ====================*/
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

/*==================== PRELOADER ====================*/
window.addEventListener("load", () => {
  const preloader = document.querySelector(".preloader")
  if (preloader) {
    preloader.style.display = "none"
  }
})

/*==================== PARTICLES BACKGROUND ====================*/
function createParticles() {
  const particlesContainer = document.createElement("div")
  particlesContainer.className = "particles"
  particlesContainer.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: -1;
  `
  document.body.appendChild(particlesContainer)

  for (let i = 0; i < 50; i++) {
    const particle = document.createElement("div")
    particle.className = "particle"
    particle.style.cssText = `
      position: absolute;
      width: 2px;
      height: 2px;
      background: var(--first-color);
      border-radius: 50%;
      opacity: 0.5;
      animation: float ${Math.random() * 10 + 10}s infinite linear;
    `
    particle.style.left = Math.random() * 100 + "%"
    particle.style.animationDelay = Math.random() * 20 + "s"
    particlesContainer.appendChild(particle)
  }

  // Add CSS animation for particles
  const style = document.createElement("style")
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
  `
  document.head.appendChild(style)
}

// Initialize particles
createParticles()

/*==================== INITIALIZE ANIMATIONS ====================*/
document.addEventListener("DOMContentLoaded", () => {
  // Set initial opacity for reveal elements
  const reveals = document.querySelectorAll(
    ".home__data, .about__img, .about__data, .skills__content, .projects__card, .contact__information, .contact__form",
  )
  reveals.forEach((reveal) => {
    reveal.style.opacity = "0"
    reveal.style.transform = "translateY(50px)"
    reveal.style.transition = "opacity 0.6s ease, transform 0.6s ease"
  })

  // Trigger initial scroll reveal
  revealOnScroll()
})
