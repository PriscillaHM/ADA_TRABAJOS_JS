//EJERCICIO 2
//Escribe un programa que le pida al usuario  ingresar un color del 
//semáforo: rojo, amarillo o verde. Dependiendo del color 
//ingresado, el programa debe imprimir un mensaje con la acción correspondiente:
// - Rojo: "Alto, no puedes avanzar."
// - Amarillo: "Precaución, prepárate para avanzar."
// -  Verde: "Avanza con seguridad."
// Si el usuario ingresa un color inválido, el programa debe mostrar un 
// mensaje: "Color no reconocido, ingresa rojo, amarillo o verde."
//Utiliza un switch para resolver este ejercicio
const prompt = require("prompt-sync")({ sigint: true});

let colorSemaforo = prompt('Ingrese el uno de los tres colores del semaforo: ');
let mensaje;

switch (colorSemaforo){
    case 'rojo':
        mensaje = 'Alto, no puedes avanzar';
        break;
    case 'amarillo':
        mensaje = 'Precaucion, preparate para avanzar';
        break;
    case 'verde':
        mensaje = 'Avanza con seguridad';
        break;
    default:
        mensaje = 'Color no reconocido, ingresa rojo, amarillo o verde.';
}

console.log(mensaje);