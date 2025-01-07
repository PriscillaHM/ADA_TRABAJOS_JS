const prompt = require("prompt-sync")({ sigint: true});
//Ejercicio 10: 
// Pide al usuario que ingrese un número del 1 al 7 y muestra el día de la 
// semana correspondiente. Si el número no está dentro de ese rango, 
// muestra un mensaje de error
let dia = prompt('Ingrese un numero del 1 al 7: ');

if(parseFloat(dia) == 1){
    console.log(`El dia numero ${dia} de la semana es Lunes`);
} else if(parseFloat(dia) == 2){
    console.log(`El dia numero ${dia} de la semana es Martes`);
} else if(parseFloat(dia) == 3){
    console.log(`El dia numero ${dia} de la semana es Miercoles`);
} else if(parseFloat(dia) == 4){
    console.log(`El dia numero ${dia} de la semana es Jueves`);
} else if(parseFloat(dia) == 5){
    console.log(`El dia numero ${dia} de la semana es Viernes`);
} else if(parseFloat(dia) == 6){
    console.log(`El dia numero ${dia} de la semana es Sabado`);
} else if(parseFloat(dia) == 7){
    console.log(`El dia numero ${dia} de la semana es Domingo`);
} else{
    console.log('Error. Favor de ingresar un numero entre el 1 al 7.')
}