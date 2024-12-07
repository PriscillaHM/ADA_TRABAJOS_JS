//EJERCICIO 7
// Crea un programa que le pida al usuario dos números y una operación 
// matemática a realizar: suma, resta, multiplicación o división. Según la operación 
// ingresada, el programa deberá calcular y mostrar el resultado. Si el usuario 
// ingresa una operación inválida, el programa debe mostrar un mensaje de error. 
// Usa switch para resolverlo.

const prompt = require("prompt-sync")({ sigint: true});

let numeroUno = prompt('Ingrese el primer numero: ');
let numeroDos = prompt('Ingrese el segundo numero: ');
let operacion = prompt('Ingrese la operacion: ');
let resultado;

switch (operacion){
    case 'suma':
        resultado = parseFloat(numeroUno) + parseFloat(numeroDos);
        break;
    case 'resta':
        resultado = parseFloat(numeroUno) - parseFloat(numeroDos);
        break;
    case 'multiplicacion':
        resultado = parseFloat(numeroUno) * parseFloat(numeroDos);
        break;
    case 'division':
        resultado = parseFloat(numeroUno) / parseFloat(numeroDos);
        break;
    default:
        resultado = 'Por favor, ingrese una operacion valida.';
}

console.log(resultado);