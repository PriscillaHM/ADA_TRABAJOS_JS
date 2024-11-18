//EJERCITACION PROMPT
const prompt = require("prompt-sync")({ sigint: true});

//Ejercicio 1 - ¡Viaje a la fiambrería!
//Situcion 1 Tomar el bus a la universidad
//Variables asignadas
// let horarioBus = '14:30';
// let costoBus = 6; //Pesos mexicanos
// let ubicacionParadaBus = 'A 2 calles';
// let tiempoBusAUniverdad = 30; //Minutos
// //Variables dadas por el usuario
// let horaActual = prompt('Ingrese la respuesta: ');
// let tiempoLlegadaParadaBus = prompt('Ingrese la respuesta: ');
// let horaDeEntradaUniversidad = prompt('Ingrese la respuesta: ');
// let estaLloviendo = prompt('Ingrese la respuesta: ');

//Situacion 2 Ver la clase de Introduccion a JS
let horarioClase = '14:00';
let linkClase = 'clase-introduccion-js.com';
let duaracionClase = 3 //horas
let horaActual = prompt('Ingrese la respuesta: ');
let hayInternet = prompt('Ingrese la respuesta: ');
let claseAnteriorVista = prompt('Ingrese la respuesta: ');


//Ejercicio 2 - Comparación de Tres Números: 
//Escribe un programa que pida al usuario tres números y determine cuál es el mayor de los 
//tres. Muestra el número mayor en la consola
// let numeroUno = prompt('Ingrese el primer número: ');
// let numeroDos = prompt('Ingrese el segundo número: ');
// let numeroTres = prompt('Ingrese el tercer número: ');

// if(parseFloat(numeroUno) > parseFloat(numeroDos)){
//     if(parseFloat(numeroUno) > parseFloat(numeroTres)){
//         console.log(`El numero ${numeroUno} es el mayor`);
//     }
// } else if(parseFloat(numeroDos) > parseFloat(numeroTres)){
//     console.log(`El numero ${numeroDos} es el mayor`);
// } else {
//     console.log(`El numero ${numeroTres} es el mayor`);
// }

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

