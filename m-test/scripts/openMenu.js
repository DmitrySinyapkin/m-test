const menuButton = document.querySelector('.nav__button')
const menu = document.querySelector('.nav__links')
const navLinks = document.querySelectorAll('.nav__link')
const requestButtons = document.querySelectorAll('.button_request')

function toggleMenu() {
    menu.classList.toggle('nav__links_opened')
    navLinks.forEach(link => link.classList.toggle('nav__link_opened'))
}

function closeMenu() {
    menu.classList.remove('nav__links_opened')
    navLinks.forEach(link => link.classList.remove('nav__link_opened'))
}

function openPopup() {
    alert('open popup')
}

menuButton.addEventListener('click', toggleMenu)

requestButtons.forEach(btn => btn.addEventListener('click', openPopup))

window.addEventListener('resize', closeMenu)
