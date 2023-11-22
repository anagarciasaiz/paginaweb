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

// iteracion 3 . cambiar imagen al pasar el raton por encima

const nuevaImagenSrc = 'https://www.spain.info/export/sites/segtur/.content/imagenes/cabeceras-grandes/castilla-mancha/cuenca-panoramica-s643574629.jpg';

const imagenPuente = document.getElementById('imagenPuente');

imagenPuente.addEventListener('mouseover', () => {
    cambiarImagenPuente();
});

imagenPuente.addEventListener('mouseout', () => {
    restaurarImagenOriginal();
});

function cambiarImagenPuente() {
    imagenPuente.src = nuevaImagenSrc;
}

function restaurarImagenOriginal() {
    // Puedes restaurar la imagen original si es necesario
    imagenPuente.src = 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Carl_Wilhelm_von_Heideck_-_Die_Br%C3%BCcke_von_Cuenca_-_WAF_334_-_Bavarian_State_Painting_Collections.jpg';
}


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

if (mostrarInfoBtn) {
    mostrarInfoBtn.addEventListener('click', () => {
        let respuesta = prompt("¿Quieres saber más sobre Cuenca? (Sí/No)").toLowerCase();

        if (respuesta === "si") {
            mostrarInformacionCuenca();
        } else {
            alert("¡Gracias por visitar!");
        }
    });
}

// Función para mostrar información sobre Cuenca
function mostrarInformacionCuenca() {
    alert(" La Catedral de Cuenca es la primera catedral gótica construida en España. Cuenca es famosa por su Semana Santa, que es una de las más impresionantes de España");
}
