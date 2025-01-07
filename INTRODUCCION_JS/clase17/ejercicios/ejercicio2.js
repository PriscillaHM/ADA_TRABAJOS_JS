//Ejercicio 2: Análisis y Modificación de Cadenas de Texto

const prompt = require("prompt-sync")({ sigint: true});

let oracion = prompt('Ingrese una oracion: ');

let procesarOracion = (oracion) => {
    let sinEspacios = oracion.trim();
    let palabras = sinEspacios.split(' ');
    let posicionJS = oracion.indexOf('javascript');
    let modificación = palabras.map((palabra) => palabra.replace(/a/g, '@'));
    let oracionFinal = modificación.join('-');
    
    return {
        oracion: oracionFinal,
        posicionJS: posicionJS
    }
}

console.log(procesarOracion(oracion));