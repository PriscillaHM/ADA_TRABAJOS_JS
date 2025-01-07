//EJERCITACION PROMPT
const prompt = require("prompt-sync")({ sigint: true});

//Ejercicio 1 - ¡Viaje a la fiambrería!
//Situcion 1 Tomar el bus a la universidad
//Variables asignadas
let horarioBus = '14:30';
let costoBus = 6; //Pesos mexicanos
let ubicacionParadaBus = 'A 2 calles';
let tiempoBusAUniverdad = 30; //Minutos
//Variables dadas por el usuario
let horaActual = prompt('Ingrese la respuesta: ');
let tiempoLlegadaParadaBus = prompt('Ingrese la respuesta: ');
let horaDeEntradaUniversidad = prompt('Ingrese la respuesta: ');
let estaLloviendo = prompt('Ingrese la respuesta: ');

//Situacion 2 Ver la clase de Introduccion a JS
//Variables asignadas
let horarioClase = '14:00';
let linkClase = 'clase-introduccion-js.com';
let duaracionClase = 3 //horas
//Variables dadas por el usuario
let horaActual2 = prompt('Ingrese la respuesta: ');
let hayInternet = prompt('Ingrese la respuesta: ');
let claseAnteriorVista = prompt('Ingrese la respuesta: ');