// Ejercicio 5: ¡Despídete de tu perfil! 
// Consigna:
// ¿Quieres empezar de cero? Es momento de eliminar tu archivo perfil.json. 
// Verifica que el archivo existe antes de intentar borrarlo.

const fs = require('fs')

if(fs.existsSync('perfil.json')){
    fs.unlink('perfil.json', (err) =>{
        if(err){
            console.log(err)
        }else{
            console.log('Archivo eliminado correctamente.')
        }
    })
} else {
    console.log('El archivo no existe.')
}