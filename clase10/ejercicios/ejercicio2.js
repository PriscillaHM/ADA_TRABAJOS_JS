const prompt = require("prompt-sync")({ sigint: true});
//Ejercicio 2 – Usando las variables:
// Escribe un programa que pida al usuario que ingrese su nombre, su
// edad y su peso, y luego muestre un mensaje personalizado que incluya
// toda esta información.

let nombre = prompt('Ingrese su nombre: ');
let edad = prompt('Ingrese su edad: ');
let peso = prompt('Ingrese su peso: ');
const mensaje = `Hola ${nombre}, tu edad es ${edad} anios y tu peso son ${peso}kg.`;
console.log(mensaje);