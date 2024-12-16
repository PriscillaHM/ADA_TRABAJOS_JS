// Ejercicio 6: Buscar la última posición de un elemento repetido 
// Tienes una lista de números [2, 5, 7, 2, 8, 7]. Encuentra y muestra la última 
// posición en la que aparece el número 7.

let numeros = [2, 5, 7, 2, 8, 7];
console.log('Array inicial: ',numeros);

let indice7 = numeros.lastIndexOf(7);
console.log('Indice de la ultima posicion de 7: ',indice7);