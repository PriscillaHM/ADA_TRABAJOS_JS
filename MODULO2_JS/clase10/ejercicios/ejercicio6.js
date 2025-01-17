const prompt = require("prompt-sync")({ sigint: true});
//Ejercicio 6 - Comparaciones y Operadores Lógicos:
// Declara dos variables con valores numéricos. Utiliza operadores de
// comparación y lógicos para verificar si ambos números son mayores que
// 10 y muestra el resultado en la consola.

let numeroUno = 10;
let numeroDos = 20;

if(numeroUno > 10 && numeroDos > 10){
    console.log('Ambos numeros son mayores a 10');
} else {
    console.log('Algun numero es menor a 10');
}