const fs = require('fs');

//Definimos la ruta del archivo json que vamos a manipular
const rutaArchivo = './productos.json';

//Paso 1: Leer archivos JSON
fs.readFile(rutaArchivo, 'utf8', (err, data) =>{
    if(err){
       console.error('Error al leer el archivo', err)
       return //detiene la ejecucion
    }
    //convertimos el contenido de archivo json a un objeto js
    //utilizando el metodo visto
    const productos = JSON.parse(data)
    console.log('Productos actuales: ', productos);

    //Paso 2: Agregar un nuevo producto al listado
    //creamos un nuevo obejto que representa el nuevo producto
    const nuevoProducto = {
        id : productos.length + 1,
        nombre : 'Webcam',
        precio: 40
    }

    //agregamos el nuevo producto al array de productos existentes
    productos.push(nuevoProducto)
    console.log('Productos actualiazados:',productos)

    //Paso 3: Escribir al archivo json actualizado
    //convertimos el objeto de js (productos) a json
    const contenidoActualizado = JSON.stringify(productos, null, 2)

    //Escribimos el contenido en el archivo y mostramos por consola
    fs.writeFile(rutaArchivo, contenidoActualizado, (err) =>{
        if(err){
            console.error('Error al escribir en el archivo: ', err)
            return
        }
        console.log('Archivo actualizado correctamente');
    })
})