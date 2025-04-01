//PASO 1 Importar modulo
const { error } = require('console')
const net = require('net')

//PASO 2 Configuracion de la conexion
const PORT = 5000
const HOST = 'localhost'

//PASO 3 Creamos la conexion al servidor usando net.createConnection
const client = net.createConnection({port: PORT, host: HOST}, () => {
    //PASO 4 mensaje para la conexion
    console.log('Conectado al servidor.')

    //PASO 5 Enviamos un mensaje incial al servidor
    client.write('Hola, servidro.')

    //PASO 6 Configurar tiempo de espera
    client.setTimeout(1000, () => {
        console.log('Tiempo de espera alcanzado, cerrando conexion...')
    })

    //PASO 7 Pausamos la recep cion de datos despues de 2 segundos 
    setTimeout(() => {
        console.log('Pausa la recepcion de datos...')
        client.pause()

        setTimeout(() => {
            console.log('Reanudando la recepcion de datos...')
            client.resume()

            client.write('Reunudado exitosamente.')
        }, 3000)
    }, 2000)

})

client.on('error', (err) =>{
    console.error(`Error: ${err.message}`)
})

//PASO 8 Para permitit que el proceso de node termine si no hay mas tareas
client.unref()

//PASO 9 Para mantener activo el proceso mientras la conexion siga abierta
client.ref()
 
setTimeout(() => { 
    console.log('Destruyendo el socket...')
    client.destroy()
}, 5000)