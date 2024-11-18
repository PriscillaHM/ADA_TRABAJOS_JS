const prompt = require("prompt-sync")({ sigint: true});
//Ejercicio 3 - Calculadora Simple
//Escribe un programa que pida al usuario dos números y una operación (suma, resta, multiplicación 
//o división). Luego, realiza la operación indicada y muestra el resultado en 
//la consola
console.log('CALCULADORA BASICA DE DOS NUMEROS');
console.log('Operaciones: Suma Resta Multiplicacion Division');
let numeroUno = prompt('Ingrese el primer número: ');
let numeroDos = prompt('Ingrese el segundo número: ');
let operacion = prompt('Ingrese la operacion que deseas (en letras minusculas, por favor): ');

if(operacion == 'suma'){
    let respuesta = parseFloat(numeroUno) + parseFloat(numeroDos);
    console.log(`El total de la operacion es ${respuesta}`);
} else if(operacion == 'resta'){
    let respuesta = parseFloat(numeroUno) - parseFloat(numeroDos);
    console.log(`El total de la operacion es ${respuesta}`);
} else if(operacion == 'multiplicacion'){
    let respuesta = parseFloat(numeroUno) * parseFloat(numeroDos);
    console.log(`El total de la operacion es ${respuesta}`);
} else if(operacion == 'division'){
    let respuesta = parseFloat(numeroUno) / parseFloat(numeroDos);
    console.log(`El total de la operacion es ${respuesta}`);
} else{
    console.log('Favor de ingresar numeros y una operacion.')
}