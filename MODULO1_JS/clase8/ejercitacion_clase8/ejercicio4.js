const prompt = require("prompt-sync")({ sigint: true});
// Ejercicio 4: Determinar si un número es par o impar 
// En este ejercicio, aprenderás a utilizar operadores aritméticos y condicionales. 
// Debes escribir un programa que:
// 1. Solicite al usuario que ingrese un número entero.
// 2. Determine si el número es par o impar.
// 3. Muestre un mensaje indicando si el número es par o impar

console.log('Ejercicio 4: Determinar si un número es par o impar')
let numeroEntero = prompt('Ingrese un número entero: ');
if((parseFloat(numeroEntero)%2) == 0){
    console.log(`El numero ${numeroEntero} es par`);
} else{
    console.log(`El numero ${numeroEntero} es impar`)
}