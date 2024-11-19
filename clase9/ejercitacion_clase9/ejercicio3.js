const prompt = require("prompt-sync")({ sigint: true});
//Ejercicio 3:
// Declara dos variables booleanas condicion1 y condicion2. Pide al 
// usuario que ingrese dos valores booleanos (true o false) y muestra el 
// resultado de diversas combinaciones lógicas.
let condicion1 = prompt('Ingrese un valor booleano (true o false): ') === 'true';
let condicion2 = prompt('Ingrese un valor booleano (true o false): ') === 'true';
let respuestaAND = condicion1 && condicion2;
let respuestaOR = condicion1 || condicion2;

console.log(`${condicion1} && ${condicion2} = ${respuestaAND}`);
console.log(`${condicion1} || ${condicion2} = ${respuestaOR}`);
console.log(`!${condicion1} = ${!condicion1}`);
console.log(`!${condicion2} = ${!condicion2}`);
