// Ejercicio 1: Creación y Manipulación de un Objeto JSON
const fs = require('fs');

const rutaArchivo = './actividad1.json';

fs.readFile(rutaArchivo, 'utf8', (err, data) =>{
    if(err){
        console.error('Error al leer el archivo', err)
        return; //detiene la ejecucion
    }

    // Muestra en la consola el título y el autor del libro.
    const libro = JSON.parse(data)
    console.log('El titulo del libro es: ', libro.titulo);
    console.log('El autor del libro es: ', libro.autor);

    //Actualiza el año del libro a un valor más reciente.
    libro.anio = 2001;

    //Añade una nueva propiedad llamada páginas que indique el número 
    //de páginas del libro.
    const paginas = 309;
    const libroActualizado = {
        titulo: libro.titulo,
        autor: libro.autor,
        anio: libro.anio,
        genero: libro.genero,
        paginas: paginas
    }

    // Muestra el objeto actualizado en la consola
    const contenidoActualizado = JSON.stringify(libroActualizado, null, 2)

    fs.writeFile(rutaArchivo, contenidoActualizado, (err) =>{
        if(err){
            console.error('Error al escribir en el archivo: ', err)
            return
        }
        console.log('Archivo actualizado correctamente');
        console.log('Contenido actualizado: ', contenidoActualizado)
    })

})