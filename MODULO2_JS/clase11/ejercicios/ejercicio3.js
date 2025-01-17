//EJERCICIO 3
// Crea un programa que le pida al usuario un número positivo. El programa 
// deberá contar desde el 1 hasta ese número e imprimir cada valor en la consola. 
// Usa un ciclo for para realizar la tarea
const prompt = require("prompt-sync")({ sigint: true});

let numeroPositivo = prompt('Ingrese un numero positivo: ');

for(let i = 0; i < numeroPositivo; i ++){
    console.log(i + 1);
}