//EJERCICIO 4
// Escribe un programa que le pida al usuario un número y 
// determine si es par o impar. Muestra un mensaje 
// explicativo indicando qué significa cada caso.
const prompt = require("prompt-sync")({ sigint: true});

let numero = prompt('Ingrese un numero: ');

let tipoNumero = parseFloat(numero) % 2 == 0 ? `El numero ${numero} es par` : `El numero ${numero} es impar`;
console.log(tipoNumero);