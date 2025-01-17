const prompt = require("prompt-sync")({ sigint: true});
// Ejercicio 7: 
// Pide al usuario que ingrese su peso en kilogramos y conviértelo a 
// libras. Muestra el resultado con un mensaje. (Averigua como pasar de 
// kg a libras, Pista: 2.20462)

let pesoKg = prompt('Ingrese su pedo en kilogramos: ');
let pesoLb = parseFloat(pesoKg) * 2.20462;
console.log(`El peso ${pesoKg}kg convertido a libras son ${pesoLb}lb`);