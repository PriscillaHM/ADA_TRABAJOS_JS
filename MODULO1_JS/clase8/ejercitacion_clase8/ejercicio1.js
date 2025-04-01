const prompt = require("prompt-sync")({ sigint: true});
//Ejercicio 1: Calcula el doble de un número 
//En este ejercicio, practicarás el uso de variables y operadores aritméticos. Debes 
//escribir un programa en JavaScript que:
//1. Solicite al usuario que ingrese un número cualquier
// 2. Calcule el doble de ese número.
// 3. Muestre el resultado en la consola.

console.log('Ejercicio 1: Calcula el doble de un número ');
let numero = prompt('Ingrese el número: ');
let dobleNumero = parseFloat(numero) * 2;
console.log(`El doble del numero ${numero} es ${dobleNumero}`);