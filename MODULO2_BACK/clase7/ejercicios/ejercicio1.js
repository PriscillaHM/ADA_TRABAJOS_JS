// Ejercicio 1: Servidor de Eco 
// Consigna:
// Crea un servidor TCP que actúe como un servidor de eco. Cuando un 
// cliente se conecte, el servidor debe recibir los datos enviados por el 
// cliente y devolverlos exactamente igual (hacer un "eco"). Además, el 
// servidor debe imprimir en la consola cada vez que un cliente se conecta, 
// desconecta o envía datos.

//Importamos el modulo net 
const net = require('net')

//Creamos el servidor
const servidor = net.createServer((socket) =>{
    console.log('Un cliente se ha conectado.')

    socket.on('data', (data) =>{
        console.log(`Datos recibidos del cliente: ${data.toString()}`)

        socket.write('Datos recibidos en el servidor.')
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