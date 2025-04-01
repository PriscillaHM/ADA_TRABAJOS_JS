// Ejercicio 5: Servidor con Contador de Conexiones 
// Consigna:
// Crea un servidor TCP que lleve un contador de cuántos clientes se han 
// conectado. Cada vez que un nuevo cliente se conecta, el servidor debe 
// enviarle un mensaje indicando cuántos clientes se han conectado hasta 
// ese momento. Cuando un cliente se desconecta, el servidor debe reducir 
// el contador.

//Importamos el modulo net
const net = require('net')

//Creamos el servidor
const servidor = net.createServer((socket) =>{
    console.log('Un cliente se ha conectado.')

    clientesConectados = clientesConectados + 1;
    console.log(`Un cliente se ha conectado. Clientes conectados: ${clientesConectados}`)

    socket.on('data', (data) =>{
        console.log('Mensaje recibido del cliente', data.toString())
    })

    //Ejercicio 4: Responder al cliente
    socket.write('¡Hola, cliente! Tu mensaje fue recibido correctamente.')

    // Ejercicio 5: Detectar cuando el cliente se desconecta
    socket.on('end', () =>{
        console.log('El cliente se ha desconectado.')
        
        //Ejercicio Extra: Contador de Clientes Conectados
        clientesConectados = clientesConectados - 1;
        console.log('Un cliente se ha desconectado. Clientes conectados: ', clientesConectados)
    })

})