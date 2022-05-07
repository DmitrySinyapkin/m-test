const menuButton = document.querySelector('.nav__button')
const menu = document.querySelector('.nav__links')
const navLinks = document.querySelectorAll('.nav__link')


function toggleMenu() {
    menu.classList.toggle('nav__links_opened')
    navLinks.forEach(link => link.classList.toggle('nav__link_opened'))
}

function closeMenu() {
    menu.classList.remove('nav__links_opened')
    navLinks.forEach(link => link.classList.remove('nav__link_opened'))
}

menuButton.addEventListener('click', toggleMenu)

window.addEventListener('resize', closeMenu)
