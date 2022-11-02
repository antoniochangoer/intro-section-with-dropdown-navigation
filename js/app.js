const openMenu = document.querySelector('.nav__hamburger');
const closeMenu = document.querySelector('.close');
const sideMenu = document.querySelector('.side-menu');
const backDrop = document.querySelector('#backdrop');
const featuresMenuToggle = document.querySelector('.features-toggle');
const companyMenuToggle = document.querySelector('.company-toggle');
const navfeaturesMenuToggle = document.querySelector('.nav-features-toggle');
const navcompanyMenuToggle = document.querySelector('.nav-company-toggle');

openMenu.addEventListener('click', () => {
    sideMenu.classList.add('show-menu');
    backDrop.classList.add('backdrop');
});

closeMenu.addEventListener('click', () => {
    sideMenu.classList.remove('show-menu');
    backDrop.classList.remove('backdrop');
});

backDrop.addEventListener('click', () => {
    sideMenu.classList.remove('show-menu');
    backDrop.classList.remove('backdrop');
});

featuresMenuToggle.addEventListener('click', (e) => {
    const dropdownFeatures = document.querySelector('.features-dropdown__items');
    const arrow = featuresMenuToggle.firstChild.nextSibling;
    arrow.classList.toggle('arrow-open')
    dropdownFeatures.classList.toggle('dropdown-show');
});

companyMenuToggle.addEventListener('click', (e) => {
    const dropdownCompany = document.querySelector('.company-dropdown__items');
    const arrow = companyMenuToggle.firstChild.nextSibling;
    arrow.classList.toggle('arrow-open')
    dropdownCompany.classList.toggle('dropdown-show');
});

// Desktop Navigation
navfeaturesMenuToggle.addEventListener('click', (e) => {
    const dropdownFeatures = document.querySelector('.features');
    const arrow = navfeaturesMenuToggle.firstChild.nextSibling;
    arrow.classList.toggle('arrow-open')
    dropdownFeatures.classList.toggle('nav-features-dropdown-show');
});

navcompanyMenuToggle.addEventListener('click', (e) => {
    const dropdownCompany = document.querySelector('.company');
    const arrow = navcompanyMenuToggle.firstChild.nextSibling;
    arrow.classList.toggle('arrow-open')
    dropdownCompany.classList.toggle('nav-company-dropdown-show');
});