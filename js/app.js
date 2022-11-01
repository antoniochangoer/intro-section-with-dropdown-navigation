const openMenu = document.querySelector('.nav__hamburger');
const closeMenu = document.querySelector('.close');
const sideMenu = document.querySelector('.side-menu');
const backDrop = document.querySelector('#backdrop');

openMenu.addEventListener('click', () => {
    sideMenu.classList.add('show-menu');
    backDrop.classList.add('backdrop');
});

closeMenu.addEventListener('click', () => {
    sideMenu.classList.remove('show-menu');
    backDrop.classList.remove('backdrop');
});