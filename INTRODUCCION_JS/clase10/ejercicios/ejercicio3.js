const prompt = require("prompt-sync")({ sigint: true});
//Ejercicio 3 – Constantes / Validación de Edad:
// Más adelante vamos a querer validar que nuestros encuestados sean de
// 18 años de edad mínima y 99 años de edad máxima.
// Nadie puede cambiar esas definiciones, por lo tanto, vamos a escribirlas
// en dos constantes (asignándoles los valores numéricos 18 y 99
// respectivamente). Por último, Deberás pedirle al usuario que ingrese su
// edad para validarla usando parseInt

const EDAD_MINIMA = 18;
const EDAD_MAXIMA = 99;
let edadUsuario = parseInt(prompt('Ingrese su edad: '));

if(edadUsuario >= EDAD_MINIMA && edadUsuario <= EDAD_MAXIMA){
    console.log(`La edad ${edadUsuario} anios esta dentro del rango.`);
} else {
    console.log(`La edad ${edadUsuario} anios no esta dentro del rango.`);
}