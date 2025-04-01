//Ejercicio 1: Crear el servidor básico 

//Ejercicio Extra: Contador de Clientes Conectados
let clientesConectados = 0;

//Importar el modulo net    
const net = require('net')

const server = net.createServer((socket) =>{
    //Ejercicio 2: Detectar conexiones de clientes 
    console.log('¡Un cliente se ha conectado!')

    //Ejercicio Extra: Contador de Clientes Conectados
    clientesConectados = clientesConectados + 1;
    console.log(`Un cliente se ha conectado. Clientes conectados: ${clientesConectados}`)

    //Ejercicio 3: Recibir y mostrar datos del cliente
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

//Ejercicio 1: Crear el servidor básico 
const PORT = 5000;
server.listen(PORT, () =>{
    console.log(`El servidor esta escuchando en el puerto: ${PORT}`)
})