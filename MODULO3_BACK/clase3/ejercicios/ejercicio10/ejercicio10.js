// Actividad 10: Gestión de compras
// Consigna: Crea un programa que registre las compras realizadas. El 
// programa debe permitirte:
// 1. Agregar una compra: Registrar una compra con su nombre y 
// precio.
// 2. Listar las compras: Mostrar todas las compras registradas.
// 3. Eliminar una compra: Eliminar una compra de la lista.

//Paso 1 Importacion
const fs = require('fs')
const filePath = './compras.json'

//Paso 2 Funcion para leer el archivo
const leerCompras = () =>{
    if(!fs.existsSync(filePath)){
        fs.writeFileSync(filePath, '[]')
    }
    const contenido = fs.readFileSync(filePath, 'utf-8')
    return JSON.parse(contenido)
}

//Paso 3 Fucion para escribir en el archivo
const escribirCompras = (compras) =>{
    const json = JSON.stringify(compras, null, 2)
    fs.writeFileSync(filePath, json, 'utf-8')
}

//Paso 4 Funcion para agregar una nueva compra
const agregarCompra = (nombreCompra, precioCompra) =>{
    const compras = leerCompras()
    compras.push({id: compras.length + 1, nombre: nombreCompra, precio: precioCompra})
    escribirCompras(compras)
    console.log('Compra agregada: ', nombreCompra)
}

//Paso 5 Funcion para listar todas las compras
const listrarCompras = () =>{
    const compras = leerCompras()
    console.log('Lista de compras: ')
    compras.forEach(compra =>{
        console.log(`${compra.id}. ${compra.nombre} Precio: ${compra.precio}`)
    })
}

//Paso 6 Funcion para eliminar un evento
const eliminarCompra = (idCompra) =>{
    let compras = leerCompras()
    compras = compras.filter(compra => compra.id !== idCompra) 
    escribirCompras(compras)
    console.log('Compra eliminada correctamente.')
}

// agregarCompra('Cheetos', 25)
// agregarCompra('Agua', 20)
// agregarCompra('Cereal', 89)
// listrarCompras()
// eliminarCompra(1)
listrarCompras()