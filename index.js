// Toggle the main Hamburger Menu
function toggleMenu() {
    const menu = document.getElementById('menuDropdown');
    const nav = document.getElementById('navbar');
    
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
        nav.classList.remove('menu-open');
    } else {
        menu.style.display = 'block';
        nav.classList.add('menu-open'); // Triggers cascading animation
    }
}

// Toggle the Nested List inside the menu
function toggleNested() {
    const nested = document.getElementById('nestedMenu');
    const arrow = document.getElementById('arrow');
    
    if (nested.style.display === 'block') {
        nested.style.display = 'none';
        arrow.style.transform = 'rotate(0deg)';
    } else {
        nested.style.display = 'block';
        arrow.style.transform = 'rotate(180deg)';
    }
}

// Navbar scroll logic: Transparent at top 20% of hero, Primary color after
window.onscroll = function() {
    const nav = document.getElementById('navbar');
    // 60vh is the hero height. 20% of that height is where we trigger the change.
    const triggerHeight = (window.innerHeight * 0.6) * 0.2;

    if (window.scrollY > triggerHeight) {
        nav.classList.add('nav-scrolled');
    } else {
        nav.classList.remove('nav-scrolled');
    }
};
