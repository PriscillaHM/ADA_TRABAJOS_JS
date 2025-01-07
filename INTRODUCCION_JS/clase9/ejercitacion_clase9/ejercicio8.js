const prompt = require("prompt-sync")({ sigint: true});
//Ejercicio8
// Pide al usuario que ingrese las longitudes de los tres lados de un 
// triángulo. Determina y muestra si el triángulo es equilátero, isósceles o 
// escaleno. (Investiga sobre los triángulos para determinar la formula).
let ladoUno = prompt('Ingrese la longitud del primer lado del tringulo: ');
let ladoDos = prompt('Ingrese la longitud del segundo lado del tringulo: ');
let ladoTres = prompt('Ingrese la longitud del tercer lado del tringulo: ');

if(parseFloat(ladoUno) == parseFloat(ladoDos) && parseFloat(ladoUno) == parseFloat(ladoTres)){
    console.log('El tringulo es equilatero');
} else if((parseFloat(ladoUno) == parseFloat(ladoDos) && parseFloat(ladoUno) != parseFloat(ladoTres)) || (parseFloat(ladoUno) == parseFloat(ladoTres) && parseFloat(ladoUno) != parseFloat(ladoDos)) || (parseFloat(ladoDos) == parseFloat(ladoTres) && parseFloat(ladoDos) != parseFloat(ladoUno))){
    console.log('El tringulo es Isoceles');
} else{
    console.log('El tringulo es escaleno');
}