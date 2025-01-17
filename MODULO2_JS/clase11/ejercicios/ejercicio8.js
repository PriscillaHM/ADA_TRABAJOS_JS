//EJERCICIO 8
// Escribe un programa que le pida al usuario un número entero positivo y 
// muestre todos los múltiplos de ese número entre 1 y 100. Utiliza un ciclo for 
// para resolverlo.

const prompt = require("prompt-sync")({ sigint: true});

let numero = parseInt(prompt('Ingrese un numero positivo y entero: '));

if(numero > 0 ){
    console.log(`Los multiplos del numero ${numero} son: `);
    for(let i = numero; i <= 100; i+= numero){
        console.log(i);
    }
}
