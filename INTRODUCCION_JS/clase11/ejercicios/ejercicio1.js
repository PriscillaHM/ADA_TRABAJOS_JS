//EJERCICIO 1
//Escribe un programa que le pida al usuario un número cualquiera. 
//El programa deberá analizar si el número ingresado es positivo, 
//negativo o cero. Utiliza estructuras if para resolverlo y muestra 
//un mensaje explicativo en cada caso.

const prompt = require("prompt-sync")({ sigint: true});

let numero = prompt('Ingrese un numero: ');

if(parseFloat(numero) > 0){
    console.log(`El numero ${numero} es positivo`);
} else if(parseFloat(numero) < 0){
    console.log(`El numero ${numero} es negativo`);
} else {
    console.log('El numero es 0');
}