// Instrucciones
// 1. Crea un archivo llamado app.js en Visual Studio Code.
// 2. Escribe un programa que haga lo siguiente:
// - Reciba el nombre del usuario desde la línea de comandos.
// - Use una variable de entorno para personalizar el saludo predeterminado.
// - Muestre información básica del entorno de ejecución:
//   - El directorio actual desde donde se ejecuta el programa.
//   - La plataforma del sistema operativo.
// - Use el módulo readline para preguntarle al usuario su edad.
// - Agradezca al usuario y termine de forma ordenada.
// 3. Crea un archivo .env para configurar un saludo personalizado.

//Importar modulo
const readline = require('readline')

//Cargamos las variables de entorno desde el archivo .env usando la libreria dotenv
require('dotenv').config()

//Establecemos un saludo predeterminado usando una variable de entorno 
//si no se define en el archivo .env, usamos este valor por defecto
const defaultGreeting = process.env.GREETING || 'Hola sin mas'

//Procesamos los argumentos de la linea de comando (process.argv)
//capturamos el primer argumento despues del nombre del archivo como el 
//nombre del usuario, si no se proporciona un argumento, usamos invitado como
//valor predeterminado
const args = process.argv.slice(2)
const userName = args[0] || 'Chicas de back!'

//Mostramos el saludo personalizado y el nombre del usuario
console.log(`${defaultGreeting}, ${userName}`)

//Mostrar info sobre el entorno de ejecucion 
console.log('Informacion sobre el entorno de ejecucion: ')
//Directorio actual
console.log(`Directorio actual: ${process.cwd()}`)
//Plataforma
console.log(`Plataforma: ${process.platform}`)

//Creamos la interfaz para interactual con el usuario
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Usamos el metodo rl.question para mostrar la pregunta al usuario
rl.question('Cuantos anios tienes?', (age) =>{
    console.log(`Wow, ${age} es una gran edad`)
    rl.close()
})

//Manejamos el evento close
rl.on('close', () =>{
    console.log('Gracias por usar este programa. adios!')
    process.exit(0)
})