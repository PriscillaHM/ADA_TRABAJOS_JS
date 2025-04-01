// Ejercicio 2: Servidor con Timeout 
// Consigna:
// Crea un servidor TCP que cierre automáticamente la conexión con un 
// cliente si no recibe datos en un período de 10 segundos. Si el cliente 
// envía datos antes de que se cumpla el tiempo, el servidor debe reiniciar 
// el contador de tiempo.

//Importamos el modulo net 
const net = require('net')

//Creamos el servidor
const servidor = net.createServer((socket) =>{
    console.log('Un cliente se ha conectado.')

    socket.on('data', (data) =>{
        console.log(`Datos recibidos del cliente: ${data.toString()}`)

        socket.write('Datos recibidos en el servidor.')

        socket.setTimeout(5000)
    })

    socket.on('end', ()=>{
        console.log('El cliente ha cerrado la conexion.')
    })

    socket.on('close', () =>{
        console.log('La conexion ha sido cerrada.')
    })

    socket.on('timeout', ()=>{
        console.log('Se ha alcanzado el timepo de espera sin recibir datos.')

        socket.end()
    })

    socket.setTimeout(5000)
})
 
servidor.on('connection', (socket) =>{
    console.log('Nueva conexion establecida.')
})

const PORT = 3000
servidor.listen(PORT, () =>{
    console.log(`El servidor esta escuchando en el puerto ${PORT}`)
})