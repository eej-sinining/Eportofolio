// darkmode.js
document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    
    // Initialize dark mode from localStorage or system preference
    function initDarkMode() {
        const savedMode = localStorage.getItem('darkMode');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        if (savedMode === 'enabled' || (savedMode === null && prefersDark)) {
            enableDarkMode();
        }
    }
    
    // Enable dark mode
    function enableDarkMode() {
        body.classList.add('dark-mode');
        if (darkModeToggle) darkModeToggle.checked = true;
        localStorage.setItem('darkMode', 'enabled');
    }
    
    // Disable dark mode
    function disableDarkMode() {
        body.classList.remove('dark-mode');
        if (darkModeToggle) darkModeToggle.checked = false;
        localStorage.setItem('darkMode', 'disabled');
    }
    
    // Toggle dark mode
    function toggleDarkMode() {
        if (body.classList.contains('dark-mode')) {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    }
    
    // Initialize
    initDarkMode();
    
    // Add event listener if toggle exists on this page
    if (darkModeToggle) {
        darkModeToggle.addEventListener('change', toggleDarkMode);
    }
    
    // Watch for system preference changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (localStorage.getItem('darkMode') === null) {
            e.matches ? enableDarkMode() : disableDarkMode();
        }
    });
});