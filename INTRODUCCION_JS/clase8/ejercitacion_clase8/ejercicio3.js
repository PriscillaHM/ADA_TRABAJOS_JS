const prompt = require("prompt-sync")({ sigint: true});// Ejercicio 3: Suma de dos números ingresados por el usuario 
// Este ejercicio te ayudará a practicar la entrada de datos y el uso de operadores 
// aritméticos. Escribe un programa que:
// 1. Pida al usuario que ingrese dos números.
// 2. Sume ambos números.
// 3. Muestre el resultado de la suma.

console.log('Ejercicio 3: Suma de dos números ingresados por el usuario ');
let numeroUno = prompt('Ingrese el primer número: ');
let numeroDos = prompt('Ingrese el segundo número: ');
let resultado = parseFloat(numeroUno) + parseFloat(numeroDos);
console.log(`El resultado de la suma de ${numeroUno} + ${numeroDos} es ${resultado}`);