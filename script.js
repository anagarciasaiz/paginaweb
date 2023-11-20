// script.js

// Funciones para mostrar/ocultar secciones
function mostrarHistoria() {
    mostrarSeccion("historia");
    ocultarSeccion("lugares");
    ocultarSeccion("gastronomia");
}

function mostrarLugares() {
    mostrarSeccion("lugares");
    ocultarSeccion("historia");
    ocultarSeccion("gastronomia");
}

function mostrarGastronomia() {
    mostrarSeccion("gastronomia");
    ocultarSeccion("historia");
    ocultarSeccion("lugares");
}

// Función auxiliar para mostrar una sección y ocultar las demás
function mostrarSeccion(id) {
    document.getElementById(id).style.display = "block";
}

function ocultarSeccion(id) {
    document.getElementById(id).style.display = "none";
}

// Interacción 1: Cambiar el color de fondo al hacer clic en un botón
const cambiarColorBtn = document.getElementById('cambiarColorBtn');
const body = document.body;

cambiarColorBtn.addEventListener('click', () => {
    body.style.backgroundColor = getRandomColor();
});

// Interacción 2: Mostrar/ocultar una sección al hacer clic en otro botón
const toggleSectionBtn = document.getElementById('toggleSectionBtn');
const historiaSection = document.getElementById('historia');

toggleSectionBtn.addEventListener('click', () => {
    historiaSection.style.display = (historiaSection.style.display === 'none' || historiaSection.style.display === '') ? 'block' : 'none';
});

// Interacción 3: Cambiar la imagen al pasar el mouse sobre otra imagen
const imagenPuente = document.getElementById('imagenPuente');
const nuevaImagenSrc = 'https://www.cuenca.es/wp-content/uploads/2019/10/IMG_20191025_123528.jpg'

imagenPuente.addEventListener('mouseover', () => {
    imagenPuente.src = nuevaImagenSrc;
});

imagenPuente.addEventListener('mouseout', () => {
    // Puedes restaurar la imagen original si es necesario
    imagenPuente.src = 'https://desconectar.com/wp-content/uploads/2019/06/Puente-de-San-Pablo.jpg';
});

// Función para obtener un color aleatorio
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Interacción 1: Saludo personalizado
let nombre = prompt("Ingresa tu nombre:");
alert(`Hola, ${nombre}!`);

// Interacción 2: Mostrar/Mostrar información sobre Cuenca
let respuesta = prompt("¿Quieres saber más sobre Cuenca? (Sí/No)").toLowerCase();

if (respuesta === "si") {
    mostrarInformacionCuenca();
} else {
    alert("¡Gracias por visitar!");
}
