// Ejercicio 7: Encuentra tu meta perdida 
// Consigna:
// Revisa tu lista de metas en el archivo metas.json. Busca si una meta 
// específica, como “Viajar a Japón”, ya está incluida. Si no, agrégala.
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

let buscarMeta = (meta) =>{
    const metas = leerMetas()
    const metaBuscada = metas.find(m => m.meta === meta)

    if(metaBuscada){
        console.log('Meta encontrada: ', metaBuscada)
    } else{
        console.log('La meta no se encontro.')
        metas.push({meta})
        guardarMetas(metas)
        console.log('Meta guardada correctamente')
    }
}

agregarMeta('Aprender Node.js')
agregarMeta('Aprender Base de datos')
buscarMeta('Aprender Node.js')
buscarMeta('Viajar a Brazil')
