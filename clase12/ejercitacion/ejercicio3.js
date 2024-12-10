// Ejercicio 3: Ciclo For 
// Nuestra tarea es contar la cantidad de números impares que hay desde 
// el número 0 hasta un número X (inclusive).

const prompt = require("prompt-sync")({ sigint: true});

let number = parseFloat(prompt('Ingrese un numero: '));
let impares = 0;

for(let i = 0; i <= number; i++){
    if(i % 2 != 0){
        impares++;
    }
}
console.log(`La cantidad de numero impares es ${impares}`);