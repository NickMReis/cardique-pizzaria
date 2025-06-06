// Menu Hamburguer
const iconeMenu = document.getElementById('iconeMenu');
const menuLinks = document.getElementById('menuLinks');

iconeMenu.addEventListener('click', () => {
    menuLinks.classList.toggle('show');
});