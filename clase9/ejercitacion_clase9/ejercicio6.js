const prompt = require("prompt-sync")({ sigint: true});
// Ejercicio 6: 
// Pide al usuario que ingrese su edad y verifica si es mayor o menor de 
// edad. Muestra un mensaje personalizado según el caso.

let edadUusario = prompt('Ingrese su edad: ');

if(parseFloat(edadUusario) >= 18){
    console.log('Usted es una persona mayor de edad.');
} else{
    console.log('Usted es una persona menor de edad.');
}