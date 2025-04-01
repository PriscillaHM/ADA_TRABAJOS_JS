// Ejercicio 5: Convierte temperaturas como un profesional 
// Consigna:
// Crea un programa interactivo que permita convertir temperaturas de 
// grados Celsius a Fahrenheit. Este ejercicio te ayudará a practicar el uso 
// del módulo readline para manejar entradas del usuario y aplicar cálculos 
// básicos. Además, incluye un mensaje personalizado de bienvenida 
// configurado a través de variables de entorno.

//Importamos el modulo 
const readline = require('readline')

//Cargamos las variables de entorno
require('dotenv').config()

//Establecemos un saludo predeterminado
const mensajeBienvenida = process.env.WELCOME_MESSAGE || 'Hola.'

//Mostramos el saludo de bienvenida
console.log(mensajeBienvenida)

//Creamos la interfaz 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Dame la tempratura en grados Celsius: ', (temperatura) =>{
    let tempFahrenheit = (temperatura * (9/5)) + 32
    console.log(`La temperatura en grados Fahrenheit es: ${tempFahrenheit}`)
    rl.close()
})

//Manejamos el evento close
rl.on('close', () =>{
    console.log('Espero haber ayudado, bye!')
    process.exit(0)
})