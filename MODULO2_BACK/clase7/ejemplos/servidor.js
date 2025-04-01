//PASO 1 Importamos el modulo net
const net = require('net')

//PASO 2 Crear el servidor tcp utilizando el metodo createServer del modulo net
//Este metodo recibe una funcion de callback que se ejecuta cada vez que un cliente se conecta al servidor
const server = net.createServer((socket) =>{
    console.log('Un cliente se ha conectado al servidor.')

    //PASO 3 Agregamos los eventos
    //1. Evento data: se emite cuando el servidor recibe datos de parte del cliente
    socket.on('data', (data) =>{
        console.log(`Datos recibidos del cliente ${data.toString()}`)

        //Metodo socket.write
        //Podemos responder al cliente enviandole un mensaje de respuesta
        socket.write('Mensaje recido por el servidor.')
    })

    //2. Evento end: Se emite cuando el cliente cierra la conexion de manera ordenada
    socket.on('end', () =>{
        console.log('El cliente ha cerrado la conexion.')
    })

    //3. Evento error: se emite cuando ocurre error en el socket
    socket.on('error', (err) =>{
        console.error(`Error en la conexion: ${err.message}`);
    })

    //4. Evento close: se emite cuando el socket se cierra manera ordenada o abrupta
    socket.on('close', () =>{
        console.log('La conexion con el cliente se ha cerrado.')
    })

    //5. Evento timeout: se emite cuando se alcanza el tiempo de espera definido por setTimeout para recibir datos
    socket.on('timeout', () =>{
        console.log('Se ha alcanzado el tiempo de espera sin recibir datos')
        
        //Metodo socket.end
        //Podemos cerrar la conexion si se alcanza el timeout
        socket.end()
    })

    //Metodo setTimeout
    //Configuramos un tiempo de espera usando el metodo setTimeout
    socket.setTimeout(5000) //5000 = 5 segundos
})

//6. Evento connection:
server.on('connection', (socket) =>{
    console.log('Nueva conexion establecida')
})

//PASO 4 Ponemos el servidor a escuchar en el puerto
const PORT = 3000
server.listen(PORT, () =>{
    console.log(`El servidor esta escuchando en el puerto ${PORT}`)
})

//7. Evento listening: se emite cuando el servidor comienza a escuchar en el puerto especifico
server.on('listening', () =>{
    console.log('El servidor esta listo para recibir conexiones.')
})

//8. Evento error: se emite si ocurre un error al intentar iniciar el servidor
server.on('error', (err) =>{
    console.err(`Error al iniciar el servidor: ', ${err.message}`)
})

//9. Evento close: se emite cuando el servidor se cierra
server.on('close', () =>{
    console.log('El servidor se ha cerrado')
})