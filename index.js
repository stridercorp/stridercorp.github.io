// Change navbar background on scroll
window.onscroll = function() {
    const nav = document.getElementById('navbar');
    // 20% of 60vh hero = ~12% of total height, or just use 100px
    if (window.scrollY > 100) {
        nav.classList.add('nav-scrolled');
    } else {
        nav.classList.remove('nav-scrolled');
    }
};

// Toggle Main Menu
function toggleMenu() {
    const menu = document.getElementById('menuDropdown');
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
}

// Toggle Nested List
function toggleNested() {
    const nested = document.getElementById('nestedMenu');
    nested.style.display = (nested.style.display === 'block') ? 'none' : 'block';
}
