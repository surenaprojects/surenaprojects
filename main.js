// --- JavaScript for UI Interactivity and Animations ---

/**
 * Initializes the Scroll Reveal animation effect for elements.
 * This uses the Intersection Observer API for better performance.
 */
function initializeScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Stop observing the element once it has been revealed.
                observer.unobserve(entry.target);
            }
        });
    }, {
        // Trigger the animation when the element is 10% visible.
        threshold: 0.1 
    });

    // Attach the observer to all elements with the '.scroll-reveal' class.
    document.querySelectorAll('.scroll-reveal').forEach(element => {
        observer.observe(element);
    });
}

/**
 * Sets up the mobile menu toggle functionality.
 */
function setupMobileMenu() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
            // The 'show' class controls the menu's visibility via CSS.
            mobileMenu.classList.toggle('show');
        });
    }
}

// --- INITIALIZATION ---
// This function runs after the entire HTML document has been loaded.
document.addEventListener("DOMContentLoaded", () => {
    setupMobileMenu();
    initializeScrollReveal();
});
