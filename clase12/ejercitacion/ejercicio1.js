//Ejercicio 1: While 
// Crea un programa que solicite al usuario ingresar números continuamente 
// hasta que el usuario ingrese un número negativo. Luego, imprime la suma 
// de todos los números ingresados.

const prompt = require("prompt-sync")({ sigint: true});

let numero = parseFloat(prompt("Ingrese un numero: "));
let suma = 0;

while(numero > 0){
    suma = numero + suma;
    numero = parseFloat(prompt("Ingrese un numero: "));
}

console.log(suma);
