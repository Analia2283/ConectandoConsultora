document.addEventListener("DOMContentLoaded", () => {
    const openButton = document.querySelector('.nav__menu');
    const menu = document.querySelector('.nav__link');
    const closeMenu = document.querySelector('.nav__close');
    const navLinks = document.querySelectorAll('.nav__links');

    // Abre el menú cuando se hace clic en el botón de menú
    openButton.addEventListener('click', () => {
        menu.classList.add('nav__link--show');
    });

    // Cierra el menú cuando se hace clic en el botón de cerrar
    closeMenu.addEventListener('click', () => {
        menu.classList.remove('nav__link--show');
    });

    // Cierra el menú cuando se hace clic en cualquiera de los enlaces de navegación
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('nav__link--show');
        });
    });
});