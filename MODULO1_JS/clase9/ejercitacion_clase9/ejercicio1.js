const prompt = require("prompt-sync")({ sigint: true});
//Ejercicio 1 
//Declara dos variables numéricas numero1 y numero2. Pide al usuario 
//que ingrese dos números y muestra cuál es mayor o si son iguales.
let numero1 = prompt("Ingrese el primer numero: ");
let numero2 = prompt("Ingrese el segundo numero: ");

if(parseFloat(numero1) === parseFloat(numero2)){
    console.log(`Ambos numeros son iguales`);
} else if (parseFloat(numero1) > parseFloat(numero2)){
    console.log(`El numero ${numero1} es mayor`);
} else{
    console.log(`El numero ${numero2} es mayor`);
}