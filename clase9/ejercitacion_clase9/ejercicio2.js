const prompt = require("prompt-sync")({ sigint: true});
//Ejercicio 2: 
// Define dos constantes, RANGO_MINIMO y RANGO_MAXIMO, con 
// valores numéricos de tu elección. Pide al usuario que ingrese un 
// número y verifica si está dentro del rango definido por las constantes.

const RANGO_MINIMO = 10;
const RANGO_MAXIMO = 21;
let numero = prompt("Ingrese un numero: ");

if(parseFloat(numero) >= RANGO_MINIMO && parseFloat(numero) <= RANGO_MAXIMO){
    console.log(`El numero ${numero} esta dentro del rango`);
} else{
    console.log(`El numero ${numero} esta fuera del rango`);
}