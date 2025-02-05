// Ejercicio 10: ¡Haz un respaldo de tus metas! 
// Consigna:
// Nunca está de más guardar una copia de seguridad. Escribe un programa 
// que copie el contenido de metas.json en un archivo llamado 
// respaldo_metas.json

const fs = require('fs')

fs.copyFile('metas.json','respaldo_metas.json', (err) =>{
    if(err){
        console.log('Error al respaldar el archivo.',err)
    } else{
        console.log('Archivo respaldado como respaldo_metas.json.')
    }
})
