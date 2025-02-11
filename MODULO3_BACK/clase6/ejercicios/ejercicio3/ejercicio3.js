// Ejercicio 3: ¡Sumemos dos números! 
// Consigna:
// Tu tarea es escribir un programa interactivo que permita al usuario 
// ingresar dos números y calcule su suma. Este ejercicio te ayudará a 
// practicar el uso del módulo readline para leer entradas del usuario en la 
// consola

// Requisitos del programa:
// 1. Usa el módulo readline para crear una interfaz interactiva.
// 2. Pide al usuario que ingrese dos números, uno a la vez.
// 3. Calcula y muestra la suma de los dos números.
// 4. Finaliza el programa con un mensaje de agradecimiento.
// Indicaciones:
// 1. Crea un archivo llamado app.js.
// 2. Usa readline.createInterface para manejar la entrada y salida del 
// usuario.
// 3. Utiliza callbacks para procesar las respuestas del usuario.
// 4. Ejecuta el programa y prueba ingresando diferentes valores.

//Importamos el modulo 
const { parse } = require('path')
const readline = require('readline')

//Creamos la interfaz para interactua con el usuario
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Usamos el metodo rl.question para mostrar la pregunta al usuario
rl.question('Dame el primer numero: ', (num1) =>{
    rl.question('Dame el segundo numero: ', (num2) =>{
        const suma = parseFloat(num1) + parseFloat(num2)
        console.log('La suma es: ', suma)
        rl.close()
    })
})

//Manejamos el evento close
rl.on('close', () =>{
    console.log('Gracias por usar este programa. adios!')
    process.exit(0)
})