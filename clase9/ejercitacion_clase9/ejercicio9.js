const prompt = require("prompt-sync")({ sigint: true});
// Ejercicio 9: 
// Define una constante PI con el valor de pi (3.14159). Pide al usuario 
// que ingrese el radio de un círculo y calcula su área y perímetro 
// utilizando la constante PI.
let pi = 3.14159;
let radio = prompt('Ingrese el radio del circulo: ');
let area = pi*(parseFloat(radio)*parseFloat(radio));
let perimetro = 2 * pi * parseFloat(radio);
console.log(`El area del circulo es ${area}`);
console.log(`El perimetro del circulo es ${perimetro}`);