const prompt = require("prompt-sync")({ sigint: true});
//Ejercicio 5 – Operadores:
// Vimos cómo declarar una variable y asignarle un valor, y probablemente
// surgió la siguiente pregunta: ¿para qué sirve almacenar datos en
// variables? Las variables nos permiten reutilizar el dato asignado en la
// misma con solo invocar su nombre.
// También, algo muy importante, así como podemos hacer operaciones
// matemáticas como sumar (+) o restar (-) números, podemos hacer lo
// mismo con las variables que las referencian.

let primerNumero = 10;
let segundoNumero = 11;

let resultadoSuma = primerNumero + segundoNumero;
let resultadoResta = primerNumero - segundoNumero;
let resultadoMultiplicacion = primerNumero * segundoNumero;
let resultadoDivision = primerNumero / segundoNumero;

console.log(resultadoSuma);
console.log(resultadoResta);
console.log(resultadoMultiplicacion);
console.log(resultadoDivision);