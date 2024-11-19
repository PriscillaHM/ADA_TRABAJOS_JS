const prompt = require("prompt-sync")({ sigint: true});
//Ejercicio 4: 
// Declara una variable nombre y pide al usuario que ingrese su nombre. 
// Verifica si el nombre ingresado es igual a tu nombre

let nombreUsuario = prompt('Ingrese un nombre: ');
let nombre = 'Priscilla';

if(nombreUsuario == nombre){
    console.log('El nombre del usuario es igual al de la desarrolladora');
} else{
    console.log('El nombre del usuario es diferente al de la desarrolladora');
}