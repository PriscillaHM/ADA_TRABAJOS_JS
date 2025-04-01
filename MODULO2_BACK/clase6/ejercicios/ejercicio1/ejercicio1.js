// Ejercicio 1: ¡Personaliza tu saludo con Node.js! 
// Consigna:
// En este ejercicio, crearás un programa que salude al usuario. El saludo 
// será personalizado y dependerá de dos cosas:
// 1. Una variable de entorno llamada GREETING que define el tipo de 
// saludo (por ejemplo, "Hola", "Bienvenido" o "¡Buenos días!").
// 2. El nombre del usuario, que se obtendrá como argumento desde la 
// línea de comandos.
// Si no se proporciona un saludo en las variables de entorno o un nombre 
// en la línea de comandos, el programa usará valores predeterminados

//Importar modulo
const readline = require('readline')

//Cargamos las variables de entorno desde el archivo .env usando la libreria dotenv
require('dotenv').config()

//Establecemos un saludo predeterminado 
const defaultGreeting = process.env.GREETING || 'Hola.'


//Si el usuario no proporciona un nombre, el programa debe usar 
//"Invitado" como nombre por defecto.
const args = process.argv.slice(2)
const userName = args[0] || 'Invitada'

//Mostramos el saludo personalizado y el nombre del usuario
console.log(`${defaultGreeting}, ${userName}`)