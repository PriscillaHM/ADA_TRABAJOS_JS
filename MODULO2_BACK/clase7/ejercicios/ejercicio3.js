// Ejercicio 3: Servidor de Mensajes Personalizados 
// Consigna:
// Crea un servidor TCP que permita a los clientes enviar mensajes. El 
// servidor debe responder con un mensaje personalizado dependiendo 
// del contenido del mensaje recibido:
// • Si el cliente envía "Hola", el servidor debe responder 
// "¡Bienvenido!".
// • Si el cliente envía "Adiós", el servidor debe responder "¡Hasta 
// luego!" y cerrar la conexión.
// • Para cualquier otro mensaje, el servidor debe responder "Mensaje 
// recibido: [mensaje del cliente]".

//Importamos el modulo net 
const net = require('net')

//Creamos el servidor
const servidor = net.createServer((socket) =>{
    console.log('Un cliente se ha conectado.')

    socket.on('data', (data) =>{
        if(data.toString() == 'Hola'){
            socket.write('Bienvenido!')
        } else if(data.toString() == 'Adios'){
            socket.write('¡Hasta luego!')
            socket.end()
        } else {
            socket.write(`Mensaje recibido: ${data.toString()}`)
        }
    })

    socket.on('end', ()=>{
        console.log('El cliente ha cerrado la conexion.')
    })

    socket.on('close', () =>{
        console.log('La conexion ha sido cerrada.')
    })
})
 
servidor.on('connection', (socket) =>{
    console.log('Nueva conexion establecida.')
})

const PORT = 3000
servidor.listen(PORT, () =>{
    console.log(`El servidor esta escuchando en el puerto ${PORT}`)
})