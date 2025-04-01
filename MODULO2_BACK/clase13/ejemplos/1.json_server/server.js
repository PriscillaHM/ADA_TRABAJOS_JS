//PASO 1 Importar modulo http y fs
const http = require('http')
const fs = require('fs')

//PASO 2 Definimos el puerto
const PORT = 3000

//PASO 3 Creamos el servidor
const server = http.createServer((req, res) => {
    //Leer archivo datos.json
    fs.readFile('datos.json', 'utf8', (err, data) => {
        if(err){
            //si hay un error mostramos un mensaje
            res.end('No se pudo leer el archivo JSON.') //mensaje de error
            return
        }
        //Enviamos el contenido de archivo json al navegador
        res.setHeader('Content-Type', 'application/json')//Configuracion de tipo de contenido
        res.end(data) //enviamos el contenido del archivo json
    })
})

server.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`)
})