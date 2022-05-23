const menu = document.querySelector('#menu');
const openMenu = document.querySelector('#open-menu');
const closeMenu = document.querySelector('#close-menu');

openMenu.addEventListener('click', () => {
    menu.classList.add('active')
})

closeMenu.addEventListener('click', () => {
    menu.classList.remove('active')
})