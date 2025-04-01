// Ejercicio 7: Servidor de Chat Grupal 
// Consigna:
// Crea un servidor TCP que permita a múltiples clientes conectarse y enviar 
// mensajes. Cada mensaje enviado por un cliente debe ser retransmitido a 
// todos los demás clientes conectados. El servidor debe notificar cuando 
// un cliente se conecta o desconecta.

const net = require('net')

const servidor = net.createServer((socket)=>{
    console.log('Un cliente se ha conectado.')

    let clientes = []

    
})