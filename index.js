// Toggle the main Hamburger Menu
function toggleMenu() {
    const nav = document.getElementById('navbar');
    
    // We just toggle the class on the parent nav. 
    // CSS handles the cascading delays for children.
    nav.classList.toggle('menu-open');
}

// Toggle the Nested List inside the menu
function toggleNested() {
    const nested = document.getElementById('nestedMenu');
    const arrow = document.getElementById('arrow');
    
    // Smoothly show/hide nested items
    if (nested.style.display === 'block') {
        nested.style.display = 'none';
        arrow.style.transform = 'rotate(0deg)';
    } else {
        nested.style.display = 'block';
        arrow.style.transform = 'rotate(180deg)';
    }
}

// Navbar scroll logic (Same as before)
window.onscroll = function() {
    const nav = document.getElementById('navbar');
    const triggerHeight = (window.innerHeight * 0.6) * 0.2;

    if (window.scrollY > triggerHeight) {
        nav.classList.add('nav-scrolled');
    } else {
        nav.classList.remove('nav-scrolled');
    }
};
