const prompt = require("prompt-sync")({ sigint: true});
// Ejercicio 5: Saludo personalizado 
// Enunciado:
// Este ejercicio es ideal para familiarizarse con la manipulación de cadenas de 
// texto y la función prompt(). Escribe un programa que:
// 1. Solicite al usuario que ingrese su nombre.
// 2. Muestre un saludo personalizado usando el nombre ingresado.

console.log('Ejercicio 5: Saludo personalizado ');
let nombre = prompt('Ingrese tu nombre: ');
console.log(`Hola! ${nombre}, un gusto`);