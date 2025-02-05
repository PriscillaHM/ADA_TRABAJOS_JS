// Ejercicio 11: Sistema de gestión de contactos 
// Consigna:
// Imagina que estás desarrollando una miniaplicación para gestionar 
// contactos. Tu objetivo es:
// 1. Crear un archivo llamado contactos.json que almacene una lista de contactos.
// 2. Implementar funciones para:
// o Agregar un contacto: Cada contacto debe tener nombre, teléfono y email.
// o Listar todos los contactos.
// o Buscar un contacto por nombre.
// 3. Asegúrate de que los contactos no se repitan (valida el nombre antes de agregarlo).

//PASO 1 Importar modulo
const fs = require('fs')

//PASO 2 Funcion para leer el archivo de contactos
let leerContactos = () =>{
    if(fs.existsSync('contactos.json')){
        const data = fs.readFileSync('contactos.json', 'utf-8')
        return JSON.parse(data)
    }
    return [] //si no existe el archivo, devolvemos una lista vacia
}

//PASO 3 Funcion para guardar contactos en el archivo
let guardarContactos = (contactos) =>{
    fs.writeFileSync('contactos.json', JSON.stringify(contactos, null, 2))
}

//PASO 4 Funcion para agregar contacto
let agregarContacto = (nombre, telefono, email) =>{
    const contactos = leerContactos()

    //verificamos si ya existe un contacto con ese nombre
    if(contactos.some(contacto => contacto.nombre === nombre)){
        console.log(`El contacto '${nombre}' ya existe.`)
    }

    contactos.push({nombre, telefono, email})
    guardarContactos(contactos)
    console.log(`Contacto '${nombre}' agregado exitosamente.`)

}

//PASO 5 Funcion para listar todos los contactos
let listarContactos = () =>{
    const contactos = leerContactos()
    console.log('Lista de contactos: ')
    console.table(contactos)
}

//PASO 6 Funcion para buscar un contacto
let buscarContacto = (nombre) =>{
    const contactos = leerContactos()
    const contacto = contactos.find(c => c.nombre === nombre)

    if(contacto){
        console.log('Contacto encontrado: ', contacto)
    } else{
        console.log(`No se encontro ningun contacto con el '${nombre}'`)
    }
}

//Pruebas
// agregarContacto('Priscilla', 12345678, 'priscilla@gmail.com')
// agregarContacto('Justin', 87654321, 'justin@gmail.com')
listarContactos()
buscarContacto('Priscilla')
