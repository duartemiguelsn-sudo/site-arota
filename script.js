// Intersection Observer for scroll animations with stagger effect
document.addEventListener('DOMContentLoaded', () => {
    // Accordion Menu Logic
    const headers = document.querySelectorAll('.accordion-header');

    headers.forEach(header => {
        header.addEventListener('click', () => {
            const panel = header.nextElementSibling;
            const isOpen = header.classList.contains('active');

            // Close all panels first
            headers.forEach(h => {
                h.classList.remove('active');
                const p = h.nextElementSibling;
                p.style.maxHeight = null;
                p.classList.remove('open');
            });

            // If it wasn't already open, open the clicked one
            if (!isOpen) {
                header.classList.add('active');
                panel.classList.add('open');
                panel.style.maxHeight = panel.scrollHeight + 'px';

                // Trigger stagger animation on cards inside this panel
                const cards = panel.querySelectorAll('.stagger-anim');
                cards.forEach((card, index) => {
                    card.classList.remove('show');
                    setTimeout(() => {
                        card.classList.add('show');
                    }, index * 80);
                });
            }
        });
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
