//Importar el modulo net
const net = require('net')

//Creamos una conexion tcp al servidor que esta escuchando en el puerto 4000
const client = net.createConnection({ port: 4000 }, () => {
    console.log('Conetado al servidor.')

    //Enviamos un id de vehiculo al servidor
    const vehicleId = '3'
    client.write(vehicleId) //enviando el id al servidor
})

//Evento data
client.on('data', (data) => {
    console.log('Respuesta del servidor: ', data.toString())
    client.end()
})

//Evento end
client.on('end', () => {
    console.log('Conexion cerrada.')
})