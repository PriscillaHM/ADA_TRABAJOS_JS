
//Ejercicio 7 - Intercambio de Valores: 
// Declara dos variables con valoresiniciales y luego intercambia sus valores. 
// Muestra los valores antes y después del intercambio en la consola.
// Para intercambiar valores puedes usar varios métodos(usando una
// variable temporal, aritmética o asignación simultanea), eres libre de
// elegir el que desees, eso si, investiga sobre el que usaras. 

let valorUno = 'Mujer';
let valorDos = 'Hombre';

console.log(valorUno);
console.log(valorDos);

let temporal = valorUno;
valorUno = valorDos;
valorDos = temporal;

console.log(valorUno);
console.log(valorDos);