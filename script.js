// Datos simulados de desastres naturales desde hace 3 meses
const disasters = [
    {
        title: "Huracán Helene",
        description: "Más de 180 muertes en EE. UU. debido a severas inundaciones.",
        link: "https://example.com/huracan-helene", // Enlace a la noticia
        date: "2024-09-30"
    },
    {
        title: "Huracán Milton",
        description: "Provocó tornados y evacuaciones en Florida.",
        link: "https://example.com/huracan-milton", // Enlace a la noticia
        date: "2024-09-20"
    },
    {
        title: "Inundaciones en México",
        description: "Inundaciones severas en Acapulco tras el paso del huracán John.",
        link: "https://example.com/inundaciones-mexico", // Enlace a la noticia
        date: "2024-09-15"
    },
    {
        title: "Terremoto en Marruecos",
        description: "Un terremoto de magnitud 6.8 causó destrucción en Marrakech.",
        link: "https://example.com/terremoto-marruecos", // Enlace a la noticia
        date: "2024-09-09"
    },
    {
        title: "Incendios forestales en Grecia",
        description: "Incendios devastadores han arrasado miles de hectáreas.",
        link: "https://example.com/incendios-grecia", // Enlace a la noticia
        date: "2024-08-30"
    }
];

// Función para actualizar la lista de desastres
function updateDisasterList() {
    const disasterList = document.getElementById('disaster-list');
    disasterList.innerHTML = ''; // Limpiar contenido existente

    // Ordenar desastres por fecha (más recientes primero)
    disasters.sort((a, b) => new Date(b.date) - new Date(a.date));

    disasters.forEach(disaster => {
        const disasterDiv = document.createElement('div');
        disasterDiv.classList.add('disaster');

        disasterDiv.innerHTML = `
            <h3><a href="${disaster.link}" target="_blank">${disaster.title}</a></h3>
            <p>${disaster.description} (Fecha: ${new Date(disaster.date).toLocaleDateString()})</p>
        `;
        disasterList.appendChild(disasterDiv);
    });
}

// Simular actualización cada 10 segundos
setInterval(updateDisasterList, 10000);
document.addEventListener("DOMContentLoaded", updateDisasterList);
