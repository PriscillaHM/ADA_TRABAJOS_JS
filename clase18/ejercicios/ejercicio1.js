// Ejercicio 1: Palíndromo
// Escribe una función que determine si una cadena dada es un palíndromo. 
// Un palíndromo es una palabra, frase, número o secuencia de caracteres 
// que se lee igual hacia adelante que hacia atrás, ignorando espacios, 
// signos de puntuación y mayúsculas/minúsculas.
const prompt = require("prompt-sync")({ sigint: true});

let cadena = prompt('Ingrese una cadena de texto: ');

let palindromo = (cadena) =>{
    let cadenaSinEspacios = cadena.trim();
    let cadenaSeparada = cadenaSinEspacios.split(" ");
    
    

    return cadenaSeparada;
}

console.log(palindromo(cadena));