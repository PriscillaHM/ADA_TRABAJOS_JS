//EJERCICIO 10
// Crea un programa donde la computadora seleccione un número al azar entre 1 
// y 10. Luego, pide al usuario que adivine el número hasta 3 intentos. Si el usuario 
// acierta en cualquiera de los intentos, muestra un mensaje de felicitación y detén 
// los intentos restantes. Si no acierta después de los 3 intentos, muestra el 
// número secreto. Usa un for para resolver este ejercicio

const prompt = require("prompt-sync")({ sigint: true});

let numero = Math.floor(Math.random() * 10);

for(let i = 0; i < 3; i++){
    let respuesta = prompt('Adivine el numero del 1 al 10: ');
    if (respuesta == numero){
        console.log('¡Adivinaste!');
        break;
    }
    if(i == 2){
        console.log(`La respuesta era ${numero}`);
    }
}