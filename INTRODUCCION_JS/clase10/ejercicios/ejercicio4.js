const prompt = require("prompt-sync")({ sigint: true});
//Ejercicio 4 – Tipo de Datos:
// Declarar 4 variables utilizando la palabra reservada let y asignarles
// valores según el tipo de dato que sugiera su nombre. Además, realizar
// operaciones y validaciones adicionales sobre estos valores.

let verdadero = true;
let texto = 'Hola mundo';
let numero = 10;
let nada = null;

let suma = numero + 11;
let mensaje = texto + ', Hola chicas';

if(verdadero == true){
    console.log('La variable verdadero es True');
} else {
    console.log('La veriable verdadero es False');
}

if(nada == null){
    console.log('La variable nada es nula');
}