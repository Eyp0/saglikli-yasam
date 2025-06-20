// Tema değiştirme fonksiyonu
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    const themeButton = document.querySelector('.theme-toggle span');
    
    document.documentElement.setAttribute('data-theme', newTheme);
    themeButton.textContent = newTheme === 'dark' ? '🌙' : '☀️';
    
    // Tema tercihini localStorage'a kaydet
    localStorage.setItem('theme', newTheme);
}

// Sayfa yüklendiğinde tema tercihini kontrol et
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    const themeButton = document.querySelector('.theme-toggle span');
    if (themeButton) {
        themeButton.textContent = savedTheme === 'dark' ? '🌙' : '☀️';
    }
});
