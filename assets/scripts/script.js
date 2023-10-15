const menu = document.querySelector('.menu');
const menuItems = document.querySelectorAll('.menuItem');
const hamburger = document.querySelector('.hamburger');
const closeIcon = document.querySelector('.closeIcon');
const menuIcon = document.querySelector('.menuIcon');

// jQuery was added for help with debugging display issues.
menuIconJ = $('.menuIcon');
menuJ = $('.menu');
items = $('.menuItem a');

toggleMenu = () => {
    if (menu.classList.contains('showMenu')) {
        menu.classList.remove('showMenu');
        closeIcon.style.display = 'none';
        menuIcon.style.display = 'block';
    } else {
        menu.classList.add('showMenu');
        closeIcon.style.display = 'block';
        menuIcon.style.display = 'none';
    }
}

hamburger.addEventListener('click', toggleMenu);

// This listener was added to improve functionality and close the menu when an option is selected.  This avoids the need for end users to have to manually close the menu after navigating to a new section.
menu.addEventListener('click', function (e) {
    console.dir(e.target);
    if (e.target.tagName === 'A') {
        toggleMenu();
    }
});

