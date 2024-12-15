// Ejercicio 2: Calcular promedio de calificaciones
// Solicita al usuario cinco calificaciones y usa una función flecha para calcular 
// el promedio.

const prompt = require("prompt-sync")({ sigint: true});

let calificaciones = []

for(let i = 0; i < 5; i++){
    let calificacionesUsuario = parseFloat(prompt('Ingrese la calificacion: '));
    calificaciones.push(calificacionesUsuario);
}

let calcularPromedio = (calificaciones) => {
    let promedio = 0;
    for(let i = 0; i < calificaciones.length; i++){
        promedio+= calificaciones[i];
    }
    return promedio/5;
}

console.log('El promedio es: ' + calcularPromedio(calificaciones));