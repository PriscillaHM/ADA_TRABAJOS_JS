const prompt = require("prompt-sync")({ sigint: true});
// Ejercicio 5:
// Escribe un programa que pida al usuario que ingrese tres números y 
// determine cuál es el mayor de los tres

let numeroUno = prompt('Ingrese el primer número: ');
let numeroDos = prompt('Ingrese el segundo número: ');
let numeroTres = prompt('Ingrese el tercer número: ');

if(parseFloat(numeroUno) > parseFloat(numeroDos)){
    if(parseFloat(numeroUno) > parseFloat(numeroTres)){
        console.log(`El numero ${numeroUno} es el mayor`);
    }
} else if(parseFloat(numeroDos) > parseFloat(numeroTres)){
    console.log(`El numero ${numeroDos} es el mayor`);
} else {
    console.log(`El numero ${numeroTres} es el mayor`);
}