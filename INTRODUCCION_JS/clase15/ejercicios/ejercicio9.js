//Ejercicio 9: Eliminar espacios innecesarios 
// Tienes la siguiente cadena con espacios adicionales 
// " Hola, mundo! "
// Elimina los espacios al inicio y al final y muestra la cadena resultante.
let cadenaConEspacios = '  Hola, mundo!   ';
console.log('Cadena inicial: ', cadenaConEspacios);

let cadenaSinEspacios = cadenaConEspacios.trim();
console.log('Cadena sin espacios al inicio y final: ', cadenaSinEspacios);