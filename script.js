// Selecciona el botón de menú hamburguesa y el menú de navegación
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

// Evento para abrir/cerrar el menú de navegación al hacer clic en el botón hamburguesa
burger.addEventListener('click', () => {
    nav.classList.toggle('active'); // Activa/desactiva la clase 'active' en el menú

    // Anima los enlaces del menú
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = ''; // Elimina la animación si ya existe
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });

    burger.classList.toggle('toggle'); // Cambia el estilo del botón hamburguesa
});

// Cierra el menú de navegación al hacer clic en un enlace
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active'); // Cierra el menú
        burger.classList.remove('toggle'); // Restaura el estilo del botón hamburguesa

        // Elimina las animaciones de los enlaces
        navLinks.forEach(link => {
            link.style.animation = '';
        });
    });
});

// Función para animar las barras de habilidades
function animateSkillBars() {
    const skillLevels = document.querySelectorAll('.skill-level');

    skillLevels.forEach(level => {
        const width = level.style.width; // Guarda el ancho original
        level.style.width = '0'; // Resetea el ancho

        // Restaura el ancho con un retraso para animar
        setTimeout(() => {
            level.style.width = width;
        }, 300);
    });
}

// Filtrado de proyectos por categoría
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(btn => btn.classList.remove('active')); // Quita la clase 'active' de todos los botones
        btn.classList.add('active'); // Activa el botón seleccionado

        const filter = btn.getAttribute('data-filter'); // Obtiene el filtro seleccionado

        // Muestra/oculta las tarjetas de proyectos según el filtro
        projectCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Manejo del formulario de contacto
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Evita el envío por defecto del formulario

        // Obtiene los valores de los campos del formulario
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        console.log('Formulario enviado:', { name, email, subject, message });

        alert('¡Mensaje enviado con éxito! Te contactaré pronto.');

        contactForm.reset(); // Resetea el formulario
    });
}

// Botón para volver al inicio
const backToTopButton = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    // Muestra el botón si se ha hecho scroll hacia abajo
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('active');
    } else {
        backToTopButton.classList.remove('active');
    }
});

// Verifica si un elemento es visible en la ventana
function checkVisible(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    return (
        rect.top <= windowHeight * 0.8 && // El elemento está dentro del 80% de la ventana
        rect.bottom >= 0
    );
}

// Maneja la animación de las secciones al hacer scroll
function handleScroll() {
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        if (checkVisible(section)) {
            section.classList.add('animate'); // Agrega la clase de animación

            // Si la sección es "habilidades", anima las barras
            if (section.id === 'habilidades') {
                animateSkillBars();
            }
        }
    });
}

// Ejecuta las animaciones al cargar la página y al hacer scroll
document.addEventListener('DOMContentLoaded', () => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);
});
