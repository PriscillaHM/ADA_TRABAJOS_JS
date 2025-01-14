// Ejercicio 7: Filtrar palabras largas 
// Escribe una función que reciba un array de palabras y un número, y 
// devuelva las palabras que tienen más caracteres que el número dado.
let palabras = ['javascript', 'html', 'css', 'nodejs'];
let numero = 7;

let filtrarPalabras = (palabras, numero) =>{
    const filtro = palabras.filter((palabra) =>{
        return palabra.length > numero;
    })
     return filtro;
}

console.log(filtrarPalabras(palabras, numero));