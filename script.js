// Seleccionamos todos los elementos que queremos animar
const elementosAnimables = document.querySelectorAll('.oculto-scroll');

// Configuramos el "vigilante" (Observer)
const observadorScroll = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        // Si el elemento entra en el área visible de la pantalla...
        if (entrada.isIntersecting) {
            // Le agregamos la clase que hace la transición de CSS para mostrarlo
            entrada.target.classList.add('mostrar-scroll');
        } else {
            // ¡MAGIA ACTIVADA! 
            // Si el elemento sale de la pantalla, le quitamos la clase.
            // Así, cuando vuelva a entrar (al subir o bajar), la animación se repetirá.
            entrada.target.classList.remove('mostrar-scroll');
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