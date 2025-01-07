// Ejercicio 5: Verificar origen del auto
//Solicita al usuario ingresar la marca de un auto y utiliza una función flecha 
// para verificar y mostrar si el auto es de origen nacional o importado. Considera 
// que solo los autos de marcas "Chevrolet", "Ford" y "Fiat" son de origen 
// nacional.
const prompt = require("prompt-sync")({ sigint: true});

let nombreMarca = prompt('Ingrese la marca de auto: ');

let verificarOrigenAuto = (nombreMarca) => {
    if(nombreMarca == 'Chevrolet' || nombreMarca == 'Ford' || nombreMarca == 'Fiat'){
        console.log('La marca ' + nombreMarca + ' es de origen nacional.');
    } else {
        console.log('La marca ' + nombreMarca + ' es de origen importado.')
    }
}

verificarOrigenAuto(nombreMarca);