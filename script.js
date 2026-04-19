// Intersection Observer for scroll animations with stagger effect
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add staggered delay based on index for items appearing at the same time
                setTimeout(() => {
                    entry.target.classList.add('show');
                }, index * 100); // 100ms delay per item
                
                // Unobserve after showing
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const menuCards = document.querySelectorAll('.stagger-anim');
    menuCards.forEach((card) => {
        observer.observe(card);
    });

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
        
        // Close menu when a link is clicked
        const links = document.querySelectorAll('.nav-link');
        links.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }
});
