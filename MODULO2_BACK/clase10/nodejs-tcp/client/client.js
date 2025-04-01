//PASO 1 Importar modulo net y readline
const net = require('net')
const readline = require('readline-sync')

//PASO 2 Configuracion inicial de las opciones de conexion para el cliente
const options = {
    port: 4000,
    host: '127.0.0.1'
}

//PASO 3 Crear una nueva conexion con el servidor
const client = net.createConnection(options)

//PASO 5 Manejo de eventos
client.on('connect', () => {
    console.log('Conexion satisfactoria.')
    sendline() //LLamar a la funcion sendline() para que el usuario ingrese los datos
})

client.on('data', (data) => {
    console.log('El servidor dice: ' + data)
    sendline()
})

client.on('error', (err) => {
    console.log('Error: ', err.message)
})

//PASO 4 Definimos la funcion sendline() que permite al usuario ingresar un mensaje y decide que hacer con el
let sendline = () =>{
    //Muetra un prompt y lee la entrada del usuario de manetra sincrona
    let line = readline.question('\nDigita alguna cosa.\t')
    
    if(line == '0'){ //Verifica si el usuario 0
        client.end() //Cierra la conexion con el servidor si se ingreso 0
    } else {
        client.write(line) //Envia el mensaje ingresado por el usuario
    }
}