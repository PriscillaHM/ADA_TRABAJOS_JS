//PASO 1 Importamos el modulo
const fs = require('fs');

//PASO 2 Usamos el metodo readFile
//  1. Archivo a leer. Si el archivo no esta en el mismo directorio color la ruta
//  2. La codificacion utf-8 (unicode transformation 8bits y es una codificacion)
//  3. Callback 
//      a. Parametro 1 err:  un objeto de error que indica si algo salio mal durante la
//         lectura del archivo
//      b. Parametro 2 data: Contiene el contenido del archivo leido si no hubo error
fs.readFile('archivo.txt', 'utf-8', (err, data) =>{
    if(!err){
        console.log(data);
    } else{
        throw err
    }
})