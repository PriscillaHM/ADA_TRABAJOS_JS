//PASO 1 Importar modulo net 
const net = require('net')

//PASO 2 Crear servidor TCP
const server = net.createServer()

//PASO 3 Manejar el evento connection que se emite cuando cliente se conecta al server
server.on('connection', (socket) => {
    //Manejamos el evento data
    socket.on('data', (data) => {
        console.log('\nEl cliente' + socket.remoteAddress + socket.remotePort + ' dice: ' + data)
        
        //Confirmacion de recepcion de datos
        socket.write('Recibi tu mensaje senior cliente.')
    })

    //Manejamos el evento close
    socket.on('close', () => {
        console.log('Comunicacion finalizada.')
    })

    //Manejamos el evento error
    socket.on('error', (err) => {
        console.log('Error: ', err.message)
    })
})

//PASO 4 Iniciamos el servidor
server.listen(4000, () => {
    console.log('Servidor escuchando en el puerto ', server.address().port)
})