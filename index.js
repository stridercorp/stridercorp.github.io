// Toggle the main Hamburger Menu
function toggleMenu() {
    const nav = document.getElementById('navbar');
    // CSS handles visibility/cascade via the .menu-open class
    nav.classList.toggle('menu-open');
}

function toggleLang(event) {
    event.stopPropagation();
    const langMenu = document.getElementById('langMenu');
    // This toggles the class defined in your CSS [cite: 28]
    langMenu.classList.toggle('show-lang');
}

// Close language menu if user clicks anywhere else
window.onclick = function(event) {
    const langMenu = document.getElementById('langMenu');
    if (langMenu && langMenu.classList.contains('show-lang')) {
        langMenu.classList.remove('show-lang');
    }
    
    const nav = document.getElementById('navbar');
    if (nav.classList.contains('menu-open') && !event.target.closest('#navbar')) {
        nav.classList.remove('menu-open');
    }
};

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

// Navbar scroll logic
window.onscroll = function() {
    const nav = document.getElementById('navbar');
    // Becomes solid when you scroll 20% of the way through the 60vh banner
    const triggerHeight = (window.innerHeight * 0.6) * 0.2;

    if (window.scrollY > triggerHeight) {
        nav.classList.add('nav-scrolled');
    } else {
        nav.classList.remove('nav-scrolled');
    }
};
