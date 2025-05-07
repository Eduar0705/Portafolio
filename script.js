const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
    
    nav.classList.toggle('active');
    
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
    
    burger.classList.toggle('toggle');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        burger.classList.remove('toggle');
        
        navLinks.forEach(link => {
            link.style.animation = '';
        });
    });
});

const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'light');
        document.body.classList.add('light-theme');
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        document.body.classList.remove('light-theme');
        localStorage.setItem('theme', 'dark');
    }    
}

toggleSwitch.addEventListener('change', switchTheme);

const currentTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', currentTheme);

if (currentTheme === 'light') {
    toggleSwitch.checked = true;
    document.body.classList.add('light-theme');
} else {
    toggleSwitch.checked = false;
    document.body.classList.remove('light-theme');
}

function animateSkillBars() {
    const skillLevels = document.querySelectorAll('.skill-level');
    
    skillLevels.forEach(level => {
        const width = level.style.width;
        level.style.width = '0';
        
        setTimeout(() => {
            level.style.width = width;
        }, 300);
    });
}

const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(btn => btn.classList.remove('active'));
        
        btn.classList.add('active');
        
        const filter = btn.getAttribute('data-filter');
        
        projectCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        console.log('Form submitted:', { name, email, subject, message });
        
        alert('¡Mensaje enviado con éxito! Te contactaré pronto.');
        
        contactForm.reset();
    });
}

const backToTopButton = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('active');
    } else {
        backToTopButton.classList.remove('active');
    }
});

function checkVisible(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    return (
        rect.top <= windowHeight * 0.8 &&
        rect.bottom >= 0
    );
}

function handleScroll() {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        if (checkVisible(section)) {
            section.classList.add('animate');
            
            if (section.id === 'habilidades') {
                animateSkillBars();
            }
        }
    });
}
document.addEventListener('DOMContentLoaded', () => {
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
});