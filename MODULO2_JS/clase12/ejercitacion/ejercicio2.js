// Ejercicio 2: Do While 
// Escribe un programa que solicite al usuario ingresar una contraseña. Si la 
// contraseña es incorrecta, debe volver a pedirla hasta que el usuario 
// ingrese la correcta. La contraseña correcta es "1234".

const prompt = require("prompt-sync")({ sigint: true});

let password = '1234';
let passwordRequire = prompt('Ingrese la contrasenia: ');

do{
    console.log('Contrasenia incorrecta, ingresela nuevamente')
    passwordRequire = prompt('Ingrese la contrasenia: ');
}while(password != passwordRequire);

console.log('Contrasenia correcta')