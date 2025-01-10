// Main application logic
document.addEventListener('DOMContentLoaded', () => {
    initializeNavigation();
    setupAccessibilityFeatures();
    initializeMapFeatures();
});

function initializeNavigation() {
    // Navigation functionality from previous code
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

function setupAccessibilityFeatures() {
    // Add keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeAllModals();
        }
    });
}

function closeAllModals() {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => modal.classList.add('hidden'));
}