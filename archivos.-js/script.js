//icono responsive

const icono = document.querySelector('.bx-menu-alt-right');
const navbar = document.querySelector('.navbar');

icono.addEventListener('click', () => {
    icono.classList.toggle('bx-x')
    navbar.classList.toggle('active');
})


const menuLinks = document.querySelectorAll('.navbar a[href^="#"]');

menuLinks.forEach(links => {
    links.addEventListener('click', function() {
        navbar.classList.remove('active');
        icono.classList.remove('bx-x');
    })
})

//ACTIVE LINKS NAVBAR

const navLinks = document.querySelectorAll('.nav-link');

function activeLink() {
    navLinks.forEach(b => b.classList.remove('active'));
    this.classList.add('active');
}

navLinks.forEach(b => b.addEventListener('click', activeLink));
