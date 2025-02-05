// Ejercicio 2: Descubre tu perfil 
// Consigna:
// Es hora de revisar tu perfil digital. Lee el archivo perfil.json que creaste 
// en el ejercicio anterior y muestra la información en la consola para 
// asegurarte de que todo está correcto.

//PASO 1 Importar modulo
const fs = require('fs')

//PASO 2 Leer archivo
fs.readFile('perfil.json', 'utf-8', (err, data) =>{
    if(!err){
        console.log(data);
    } else{
        throw err
    }
})