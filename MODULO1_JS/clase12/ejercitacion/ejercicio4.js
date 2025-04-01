// Ejercicio 4: Ciclo For - Array 
// Crear un programa que permita registrar las notas de varios estudiantes 
// usando arrays y mostrarlas por pantalla:

const prompt = require("prompt-sync")({ sigint: true});

let notas = [];

for(let i = 0; i < 7; i++){
    let userNotas = parseFloat(prompt('Ingrese la nota: '));
    notas.push(userNotas);
}

console.log(notas);