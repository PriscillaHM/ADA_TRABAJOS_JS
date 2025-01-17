const prompt = require("prompt-sync")({ sigint: true});
// Ejercicio 2: Verificar si un número es positivo, negativo o cero 
// En este ejercicio, practicarás el uso de condicionales (if, else). Escribe un 
// programa en JavaScript que:
// 1. Pida al usuario que ingrese un número.
// 2. Verifique si el número es positivo, negativo o igual a cero.
// 3. Muestre un mensaje indicando cuál es el caso

console.log('Ejercicio 2: Verificar si un número es positivo, negativo o cero ');
let number = prompt('Ingrese el número: ');
if(parseFloat(number) > 0){
    console.log(`El numero ${number} es positivo`);
} else if(parseFloat(number) < 0){
    console.log(`El numero ${number} es negativo`);
} else{
    console.log('El numero es igual a 0')
}