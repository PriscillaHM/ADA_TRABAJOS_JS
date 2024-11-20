const prompt = require("prompt-sync")({ sigint: true});
//Ejercicio 9: Cálculo del IMC: 
// Escribe un programa que calcule el Índice de Masa Corporal (IMC).

let peso = parseFloat(prompt('Ingrese su peso en kg: '));
let altura = parseFloat(prompt('Ingrese su altura en metros: '));
let imc = peso / (altura * altura);
console.log(`Su IMC es ${imc}`);