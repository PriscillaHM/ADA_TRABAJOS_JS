const prompt = require("prompt-sync")({ sigint: true});
//Ejercicio 8 - Conversión de Temperaturas: 
// Escribe un programa que convierta una temperatura dada en grados 
// Celsius a grados Fahrenheit.

let celsius = prompt('Ingrese la temperatura en grados Celsius:');
let fahrenheit = celsius * 9 / 5 + 32; 
console.log(`La temperatura ${celsius}C son ${fahrenheit}F`);