

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolioy a.portfolioy-box'
    });

});

// SCRIPT DE ALERTA DE ENVIO DE FORM

function mostrarAlertaExito() {
    alert("¡Tus datos han sido enviados con éxito!");
}

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Evita el envío tradicional de HTML para manejarlo con script
    
    // Aquí iría tu lógica para enviar los datos (por ejemplo, con fetch() o AJAX)
    console.log("Datos enviados!");
    
    // Después de un envío exitoso, limpia el formulario
    e.target.reset(); // o document.getElementById("miFormulario").reset();
});