// Initialize dark mode with fade-in
function initializeDarkMode() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    
    // Check for saved preference
    const savedMode = localStorage.getItem('darkMode');
    
    // Apply saved mode before page renders
    if (savedMode === 'enabled') {
        body.classList.add('dark-mode');
        if (darkModeToggle) darkModeToggle.checked = true;
    }
    
    // Set up toggle listener
    if (darkModeToggle) {
        darkModeToggle.addEventListener('change', function() {
            if (this.checked) {
                body.classList.add('dark-mode');
                localStorage.setItem('darkMode', 'enabled');
            } else {
                body.classList.remove('dark-mode');
                localStorage.setItem('darkMode', 'disabled');
            }
        });
    }
    
    // Trigger fade-in after everything is ready
    setTimeout(() => {
        body.style.opacity = '1';
    }, 100);
}

// Run initialization
document.addEventListener('DOMContentLoaded', initializeDarkMode);

// For pages loaded via AJAX/pjax
document.addEventListener('pjax:complete', function() {
    initializeDarkMode();
    document.body.style.opacity = '1';
});
