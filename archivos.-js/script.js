//icono responsive

const icono = document.querySelector('.bx-menu-alt-right');
const navbar = document.querySelector('.navbar');

icono.addEventListener('click', () => {
    icono.classList.toggle('bx-x')
    navbar.classList.toggle('active');
})