// //EJERCICIO 5
// Escribe un programa que le pida al usuario dos números enteros (inicio y fin). El 
// programa debe mostrar todos los números pares que se encuentran entre esos 
// dos valores, incluyendo los límites si son pares. Utiliza un ciclo for para recorrer 
// los números entre el inicio y el fin. Si el número inicial es mayor que el final, el 
// programa debe mostrar un mensaje indicando que los valores son inválidos.

const prompt = require("prompt-sync")({ sigint: true});

let inicio = prompt('Ingrese el inicio del arreglo: ');
let final = prompt('Ingrese el final del arreglo: ');

if(parseFloat(inicio) <  parseFloat(final)){
    for(let i = inicio; i <= final; i++){
        let tipoNumero = i % 2 == 0 ? `El numero ${i} es par` : '';
        console.log(tipoNumero);
    }
} else {
    console.log('El numero de inicio debe ser menor que el numero final');
}

