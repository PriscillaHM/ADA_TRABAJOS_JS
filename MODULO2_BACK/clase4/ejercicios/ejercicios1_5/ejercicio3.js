// Ejercicio 3: ¡Actualiza tu estilo! 
// Consigna:
// ¿Has cambiado tu estilo o actividad reciente? ¡Es momento de actualizar 
// tu perfil! Agrega un nuevo atributo hobby a tu perfil y guarda los cambios 
// en el archivo perfil.json

//PASO 1 Importar modulo
const fs = require('fs')

//PASO 2 Leer archivo
fs.readFile('perfil.json', 'utf-8', (err, data) =>{
    if(!err){
        console.log(data);
    } else{
        throw err
    }

    // let perfil = JSON.parse(data)

    let perfilActualizado = {
        nombre: 'Priscilla',
        edad: 23,
        ciudadFavorita: 'Ensenada',
        hobby: 'Escuchar musica'
    }

    // const contenidoActualizado = JSON.stringify(perfilActualizado, null, 2)
    fs.writeFile('perfil.json',JSON.stringify(perfilActualizado, null, 2) ,(err) =>{
        if(err){
            console.error('Error al escribir en el archivo: ', err)
            return
        } 
        console.log('Archivo actualizado correctamente');
    })
})