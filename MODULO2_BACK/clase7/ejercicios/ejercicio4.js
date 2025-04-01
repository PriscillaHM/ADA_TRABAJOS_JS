// Ejercicio 4: Servidor con Manejo de Errores 
// Consigna:
// Crea un servidor TCP que maneje errores de conexión de manera 
// adecuada. Si ocurre un error en la conexión con un cliente, el servidor 
// debe imprimir un mensaje de error en la consola y cerrar la conexión con 
// ese cliente. Además, el servidor debe seguir funcionando y aceptando 
// nuevas conexiones.

//Importamos el modulo net
const net = require('net')

//Creammos el servidor 

const servidor = net.createServer((socket)=>{
    console.log('Se ha conetado un cliente.')

    socket.on('data', (data) =>{
        console.log('Datos recibidor', data.toString())
    })

    socket.on('error', (err) =>{
        console.log(`Error en la conexion. ${err.message}`)

        socket.destroy()
    })

})
const PORT = 5000
servidor.listen(PORT, () =>{
    console.log(`El servidor esta escuchando en el puerto ${PORT}`)
})