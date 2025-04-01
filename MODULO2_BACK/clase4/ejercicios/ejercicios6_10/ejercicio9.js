// Ejercicio 9: Filtra tus metas completas 
// Consigna:
// Supongamos que cada meta tiene un estado: “completa” o “pendiente”. 
// Filtra las metas que ya completaste y muéstralas en la consola
const fs = require('fs')

fs.readFile('metas.json', 'utf-8', (err, data) => {
    if (err) {
        console.error("Error al leer tu lista de metas:", err);
    } else {
        // Convertimos el contenido en una lista de objetos
        const metas = JSON.parse(data);

        // Filtramos las metas completas
        const metasCompletas = metas.filter(meta => meta.estado === "completa");

        // Mostramos las metas completas
        console.log("Metas completas: ✅", metasCompletas);
    }
});