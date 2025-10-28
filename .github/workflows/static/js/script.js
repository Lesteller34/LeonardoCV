// static/js/script.js - Incluye las animaciones de Hero y Experiencia

document.addEventListener('DOMContentLoaded', (event) => {

    // =========================================================
    // 1. ANIMACIÓN DE ENTRADA PARA LA SECCIÓN HERO (al cargar la página)
    // =========================================================
    const profilePic = document.querySelector('.profile-pic');
    const heroTitle = document.querySelector('.hero h1');
    const heroSubtitle = document.querySelector('.hero h2');
    const heroSummary = document.querySelector('.hero p');

    // Animación secuencial de los elementos del Hero usando setTimeout
    setTimeout(() => {
        if (profilePic) {
            // Prepara el elemento para la subida (transform: translateY(20px) está en el CSS de transición)
            profilePic.style.transform = 'translateY(20px)';
            profilePic.classList.add('fade-in-up');
        }
    }, 100);

    setTimeout(() => {
        if (heroTitle) {
            heroTitle.classList.add('fade-in');
        }
    }, 600);

    setTimeout(() => {
        if (heroSubtitle) {
            heroSubtitle.classList.add('fade-in');
        }
    }, 900);

    setTimeout(() => {
        if (heroSummary) {
            heroSummary.classList.add('fade-in');
        }
    }, 1200);


    // =========================================================
    // 2. OBSERVER PARA EXPERIENCIA (Dispara la transición de entrada al hacer scroll)
    // =========================================================
    const experienceSection = document.getElementById('experiencia');
    const timelineItems = document.querySelectorAll('.timeline-item'); // Elementos a animar

    if (experienceSection && timelineItems.length > 0) {
        const experienceObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Agrega la clase 'is-visible', que activa la animación CSS
                    timelineItems.forEach(item => {
                        item.classList.add('is-visible');
                    });

                    // Detiene la observación una vez que la sección ha aparecido
                    experienceObserver.unobserve(entry.target);
                }
            });
        }, {
            // Opciones: la animación empieza cuando el 5% de la sección es visible
            threshold: 0.05
        });

        experienceObserver.observe(experienceSection);
    }
});
