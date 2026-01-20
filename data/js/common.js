/* Filename: common.js 
   Fungsi: Menangani Tema, Navigasi, dan Fungsi Global
*/

document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. GLOBAL THEME MANAGEMENT ---
    const themeToggle = document.getElementById('themeToggle');
    const rootElement = document.documentElement;
    const currentTheme = localStorage.getItem('theme');

    // Set tema saat load
    if (currentTheme) {
        rootElement.setAttribute('data-theme', currentTheme);
        if (themeToggle) themeToggle.checked = currentTheme === 'dark';
    }

    // Listener jika tombol switch ditekan
    if (themeToggle) {
        themeToggle.addEventListener('change', () => {
            if (themeToggle.checked) {
                rootElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
            } else {
                rootElement.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
            }
        });
    }

    // --- 2. DYNAMIC HOME LINK ---
    const homeLink = document.getElementById('homeLink');
    if (homeLink) {
        const baseURL = window.location.protocol + '//' + window.location.hostname;
        homeLink.href = baseURL;
    }

    // --- 3. GLOBAL POPUP CLOSER (Optional) ---
    // Jika semua halaman menggunakan ID 'buttonPopupInt' untuk menutup popup
    const btnClosePopup = document.getElementById('buttonPopupInt');
    const popup = document.querySelector('.popup');
    if (btnClosePopup && popup) {
        btnClosePopup.addEventListener('click', function () {
            popup.style.display = 'none';
        });
    }
});