// Ejercicio 10: Invertir palabras 
// Crea una función que reciba una cadena de texto y devuelva otra cadena 
// con las palabras en orden inverso.
let frase = 'Aprender a programar es divertido';

let invertirCadena = (frase) =>{
    let fraseSeparada = frase.split(' ');
    let  fraseInvertida = fraseSeparada.reverse();
    let fraseNueva = fraseInvertida.join(' ');

    return fraseNueva;
}

console.log(invertirCadena(frase));