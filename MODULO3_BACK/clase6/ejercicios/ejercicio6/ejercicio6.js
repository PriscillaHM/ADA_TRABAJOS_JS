// Ejercicio 6 (Extra): Explora métodos de readline 
// Consigna:
// Este ejercicio te permitirá explorar algunos métodos adicionales del 
// módulo readline, como rl.setPrompt() y el evento 'line'. Escribe un 
// programa interactivo que solicite varias palabras al usuario y las muestre 
// en mayúsculas. El programa finalizará cuando el usuario escriba "salir".

//Importamos el modulo
const readline = require('readline')

//Creamos la interfaz
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//COnfiguramos el mensaje
rl.setPrompt('Hola! Escribe una palabra, usa la pralabra salir para terminar: ')
rl.prompt()

//Manejamos el evento line
rl.on('line', (input)=>{
    if (input.toLowerCase() === 'salir') {
        console.log('Hasta luego, bye!')
        rl.close();
    } else {
        console.log(`Palabra en mayúsculas: ${input.toUpperCase()}`);
        rl.prompt(); 
    }
})

//Manejamos el evento close
rl.on('close', () =>{
    process.exit(0)
})