//Importar el modulo net 
const net = require('net')

//Importar controlador 
const VehicleController = require('./controllers/vehicleController')

//Creamos el servidor 
const server = net.createServer((socket) =>{
    console.log('Cliente conectado')

    //Evento data
    socket.on('data', (data) => {
        //Convertirmos los datos recibidos a una cadena de texto y eliminamos espacios
        const vehicleId = data.toString().trim()
        console.log(`Solicitud recibida: ID ${vehicleId}`)

        //Llamamos al metodo handlerequest del controlador para manejar las solicitud
        //Este metodo toma el id del vehiculo y devuelve una respuesta formateada
        const response = VehicleController.handleRequest(vehicleId)

        //Enviamos la respuesta al cliente usando el metodo write
        socket.write(response)
    })

    //Evento end
    socket.on('end', () => {
        console.log('Cliente desconectado.')
    })
})

server.listen(4000, () => {
    console.log('Servidor escuchando en el puerto 4000')
})