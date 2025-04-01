// Ejercicio 4: Mensaje de despedida personalizado 
// Consigna:
// Crea un programa interactivo que pregunte al usuario su nombre y lo 
// use en un mensaje de despedida. Usa variables de entorno para 
// personalizar el saludo inicial.
// Requisitos del programa:
// 1. Usa una variable de entorno llamada START_MESSAGE para 
// configurar el saludo inicial.
// 2. Usa readline para preguntar el nombre del usuario.
// 3. Despídete del usuario con un mensaje personalizado

//Importamos el modulo 
const readline = require('readline')

//Cargamos las variables de entorno
require('dotenv').config()

//Establecemos un saludo predeterminado
const mensajeBienvenida = process.env.START_MESSAGE || 'Hola.'

//Mostramos el saludo
console.log(mensajeBienvenida)

//Creamos la interfaz 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Usamos el metodo rl.question para mostrar la pregunta al usuario
rl.question('Cual es tu nombre: ', (name) =>{
    console.log(`Hola ${name}, un gusto tenerte aqui.`)
   rl.close()
})

//Manejamos el evento close
rl.on('close', () =>{
    console.log('Gracias por pasar por aqui.')
    process.exit(0)
})