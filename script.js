// Seleccionamos todos los elementos que queremos animar (que tengan la clase .oculto-scroll)
const elementosAnimables = document.querySelectorAll('.oculto-scroll');

// Configuramos el "vigilante" (Observer)
const observadorScroll = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        // Si el elemento entra en el área visible de la pantalla...
        if (entrada.isIntersecting) {
            // Le agregamos la clase que hace la transición de CSS
            entrada.target.classList.add('mostrar-scroll');
        }
    });
}, {
    // La animación arranca cuando el 20% del elemento ya es visible
    threshold: 0.2 
});

// Le asignamos el vigilante a cada elemento que encontramos
elementosAnimables.forEach((elemento) => {
    observadorScroll.observe(elemento);
});