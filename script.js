// script.js

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

// Interacción 4: Saludo personalizado al cargar la página
window.onload = () => {
    let nombre = prompt("Ingresa tu nombre:");
    alert(`Hola, ${nombre}!`);
};

// Iteración 5: Mostrar/Mostrar información sobre Cuenca
const mostrarInfoBtn = document.getElementById('mostrarInfoBtn');

mostrarInfoBtn.addEventListener('click', () => {
    let respuesta = prompt("¿Quieres saber más sobre Cuenca? (Sí/No)").toLowerCase();

    if (respuesta === "si") {
        mostrarInformacionCuenca();
    } else {
        alert("¡Gracias por visitar!");
    }
});

// Función para mostrar información sobre Cuenca
function mostrarInformacionCuenca() {
    alert("Cuenca es una hermosa ciudad española con una rica historia y patrimonio cultural.");
}

