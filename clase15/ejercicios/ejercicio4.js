//Ejercicio 4: Convertir una lista de palabras en una frase 
// Tienes un array de palabras ["JavaScript", "es", "divertido"]. Une todas las 
// palabras en una sola frase, separadas por un espacio, y muestra el 
// resultado

let palabras = ['JavaScript', 'es', 'divertido'];
console.log('Array inicial: ', palabras);

let palabrasUnidas = palabras.join(' ');
console.log('Array despues de join: ', palabrasUnidas);