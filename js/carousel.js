const fila = document.querySelector('.contenedor-series-pelis');
const flechaIzquierda = document.getElementById('flecha-izq');
const flechaDerecha = document.getElementById('flecha-der');

flechaDerecha.addEventListener('click', () => {
    fila.scrollLeft += fila.offsetWidth;
});

flechaIzquierda.addEventListener('click', () => {
    fila.scrollLeft -= fila.offsetWidth;
});

fila.style.transform = "translateY";