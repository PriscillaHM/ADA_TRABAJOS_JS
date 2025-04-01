// Ejercicio 8: Cuenta tus metas 
// Consigna:
// ¿Sabes cuántas metas has establecido? Escribe un programa que lea tu 
// archivo metas.json y cuente cuántas metas tienes actualmente.

const fs = require('fs')

const leerMetas = () =>{
     if(fs.existsSync('metas.json')){
        const data = fs.readFileSync('metas.json', 'utf-8')
        return JSON.parse(data)
    }
    return [] 
}

let listarMetas = () =>{
    const metas = leerMetas()
    console.log('Lista de metas: ')
    console.table(metas)
    console.log(`Usted tiene ${metas.length} metas.`)
}

listarMetas()