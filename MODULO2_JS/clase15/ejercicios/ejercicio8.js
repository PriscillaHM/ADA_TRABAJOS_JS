//Ejercicio 8: Extraer una parte de una frase 
// Tienes la frase "Los gatos son geniales". Extrae y muestra solo la parte 
// "gatos" utilizando el método adecuado.

let frase = 'Los gatos son geniales';
console.log('Frase incial: ', frase);

let subCadena = frase.slice(4,9);
console.log('Parte de la frase: ', subCadena);