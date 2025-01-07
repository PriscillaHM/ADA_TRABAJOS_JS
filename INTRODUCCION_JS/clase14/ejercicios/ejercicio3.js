// Ejercicio 3: Clasificación de edades
// Solicita al usuario una edad y usa una función flecha para clasificarla en niño, 
// adolescente, adulto o adulto mayor.

const prompt = require("prompt-sync")({ sigint: true});

let edadUsuario = parseFloat(prompt('Ingrese su edad: '));

let clasificacionUsuario = (edadUsuario) =>{
    if(edadUsuario > 0 && edadUsuario <= 13){
        console.log('Es un infante');
    } else if(edadUsuario > 13 && edadUsuario <= 19){
        console.log('Es un adolescente');
    } else if(edadUsuario > 19 && edadUsuario <= 50){
        console.log('Es un adulto');
    } else if(edadUsuario > 50){
        console.log('Es un adulto mayor');
    } else {
        console.log('Ingrese una edad valida.');
    }
}

clasificacionUsuario(edadUsuario);