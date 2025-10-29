document.addEventListener('DOMContentLoaded', () => {
    // ========== ANIMACIÓN HERO (al cargar) ==========
    const profilePic = document.querySelector('.profile-pic');
    const heroTitle = document.querySelector('.hero h1');
    const heroSubtitle = document.querySelector('.hero h2');
    const heroSummary = document.querySelector('.hero p');

    // Secuencia de animaciones con delays
    setTimeout(() => {
        if (profilePic) {
            profilePic.style.transform = 'translateY(20px)';
            profilePic.classList.add('fade-in-up');
        }
    }, 100);

    setTimeout(() => heroTitle?.classList.add('fade-in'), 600);
    setTimeout(() => heroSubtitle?.classList.add('fade-in'), 900);
    setTimeout(() => heroSummary?.classList.add('fade-in'), 1200);

    // ========== ANIMACIÓN EXPERIENCIA (scroll) ==========
    const experienceSection = document.getElementById('experiencia');
    const timelineItems = document.querySelectorAll('.timeline-item');

    if (experienceSection && timelineItems.length > 0) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    timelineItems.forEach(item => item.classList.add('is-visible'));
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.05 });

        observer.observe(experienceSection);
    }
});