// Ejercicio 5: Uso de Arrays y Condicionales 
// Crea un programa que solicite al usuario ingresar 5 nombres y los 
// almacene en un array. Luego, solicita al usuario ingresar un nombre y 
// verifica si ese nombre se encuentra en el array. 

const prompt = require("prompt-sync")({ sigint: true});

let names = [];

for(let i = 0; i < 5; i++){
    let userNames = parseFloat(prompt('Ingrese un nombre: '));
    names.push(userNames);
}

let nameRequire = prompt('Ingrese un nombre en especifico: ');

for(let i = 0; i < names.length; i ++){
    if(nameRequire == names[i]){
        console.log(`El nombre ${nameRequire} se encuentra en el array`);
    } else {
        console.log(`El nombre ${nameRequire} no se encuentra en la posicion ${i+1}`);
    }
}