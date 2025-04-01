// Ejercicio 6: Tu lista de metas 
// Consigna:
// Es momento de planear tus metas. Crea un archivo llamado metas.json 
// con una lista vacía al principio. Luego, agrega metas como: “Aprender 
// Node.js” y “Viajar a Japón”. Guarda la lista actualizada en el archivo.
const fs = require('fs')

const leerMetas = () =>{
     if(fs.existsSync('metas.json')){
        const data = fs.readFileSync('metas.json', 'utf-8')
        return JSON.parse(data)
    }
    return [] 
}

let guardarMetas = (metas) =>{
    fs.writeFileSync('metas.json', JSON.stringify(metas, null, 2))
}

let agregarMeta = (meta) =>{
    const metas = leerMetas()

    if(metas.some(meta => meta.meta === meta)){
        console.log('La meta existe')
    }

    metas.push({meta})
    guardarMetas(metas)
    console.log('Meta guardada correctamente')
}

agregarMeta('Aprender Node.js')
agregarMeta('Aprender base de datos')