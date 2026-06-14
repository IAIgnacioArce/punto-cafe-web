// =========================================
// LÓGICA DEL SCROLL ANIMADO (FIJO AL BAJAR)
// =========================================
const elementosAnimables = document.querySelectorAll('.oculto-scroll');

const observadorScroll = new IntersectionObserver((entradas, observador) => {
    entradas.forEach((entrada) => {
        // Si el elemento entra en el área visible...
        if (entrada.isIntersecting) {
            entrada.target.classList.add('mostrar-scroll');
            // Dejamos de observar este elemento específico para que quede fijo para siempre
            observador.unobserve(entrada.target);
        }
    });
}, {
    // Bajamos ligeramente el umbral a 0.15 para suavizar la detección en pantallas compactas
    threshold: 0.15 
});

elementosAnimables.forEach((elemento) => {
    observadorScroll.observe(elemento);
});

// =========================================
// LÓGICA DE LA VENTANA MODAL
// =========================================
const modal = document.querySelector('#modal-producto');
const botonesAbrir = document.querySelectorAll('.btn-abrir-modal');
const botonCerrar = document.querySelector('#btn-cerrar-modal');

botonesAbrir.forEach((boton) => {
    boton.addEventListener('click', () => {
        modal.showModal();
        document.body.style.overflow = 'hidden'; 
    });
});

botonCerrar.addEventListener('click', () => {
    modal.close();
    document.body.style.overflow = 'auto'; 
});

modal.addEventListener('click', (evento) => {
    const dimensiones = modal.getBoundingClientRect();
    if (
        evento.clientX < dimensiones.left ||
        evento.clientX > dimensiones.right ||
        evento.clientY < dimensiones.top ||
        evento.clientY > dimensiones.bottom
    ) {
        modal.close();
        document.body.style.overflow = 'auto';
    }
});