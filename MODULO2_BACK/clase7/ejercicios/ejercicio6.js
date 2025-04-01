// Ejercicio 6: Servidor de Comandos 
// Consigna:
// Crea un servidor TCP que permita a los clientes enviar comandos 
// simples. Dependiendo del comando recibido, el servidor debe realizar 
// una acción específica:
// • Si el cliente envía "fecha", el servidor debe responder con la fecha y 
// hora actual.
// • Si el cliente envía "ip", el servidor debe responder con la dirección 
// IP del cliente.
// • Si el cliente envía "salir", el servidor debe cerrar la conexión.
// • Para cualquier otro comando, el servidor debe responder 
// "Comando no reconocido"

//Importamos el modulo net
const net = require('net')

//Creamos el servidor
const servidor = net.createServer((socket) =>{
    console.log('Un cliente se ha conectado.')

    socket.on('data', (data) =>{
        if(data.toString() == 'fecha'){
            socket.write(`Fecha y hora actual: ${new Date().toLocaleString()}`)
        } else if(data.toString() == 'ip'){
            socket.write('Tu ip es: ', socket.remoteAddress)
        } else if(data.toString() == 'salir'){
            socket.write('Cerrando conexion.')
            socket.end()
        } else {
            socket.write('Comando no reconocido.')
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