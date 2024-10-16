// Datos simulados de desastres naturales
const disasters = [
    {
        title: "Huracán Helene",
        description: "Más de 180 muertes en EE. UU. debido a severas inundaciones.",
        link: "https://example.com/huracan-helene" // Enlace a la noticia
    },
    {
        title: "Huracán Milton",
        description: "Provocó tornados y evacuaciones en Florida.",
        link: "https://example.com/huracan-milton" // Enlace a la noticia
    },
    {
        title: "Inundaciones en México",
        description: "Inundaciones severas en Acapulco tras el paso del huracán John.",
        link: "https://example.com/inundaciones-mexico" // Enlace a la noticia
    }
];

// Función para actualizar la lista de desastres
function updateDisasterList() {
    const disasterList = document.getElementById('disaster-list');
    disasterList.innerHTML = ''; // Limpiar contenido existente

    disasters.forEach(disaster => {
        const disasterDiv = document.createElement('div');
        disasterDiv.classList.add('disaster');

        disasterDiv.innerHTML = `
            <h3><a href="${disaster.link}" target="_blank">${disaster.title}</a></h3>
            <p>${disaster.description}</p>
        `;
        disasterList.appendChild(disasterDiv);
    });
}

// Simular actualización cada 10 segundos
setInterval(updateDisasterList, 10000);
document.addEventListener("DOMContentLoaded", updateDisasterList);
