// Actividad 5: Registro de contactos
// Consigna: Crea un programa que permita registrar contactos con 
// nombre, teléfono y correo electrónico. El programa debe permitirte:
// 1. Agregar un contacto: Registrar un nuevo contacto.
// 2. Listar los contactos: Mostrar todos los contactos registrados.
// 3. Eliminar un contacto: Eliminar un contacto de la lista

//Paso 1 Importacion
const fs = require('fs');
const filePath = './contactos.json';


//Paso 2 Funcion para leer el archivo 
const leerContactos = () =>{
    if(!fs.existsSync(filePath)){
        fs.writeFileSync(filePath, '[]')
    }
    const contenido = fs.readFileSync(filePath, 'utf-8')//leemos el archivo 
    return JSON.parse(contenido) //convertir el contenido json en un array de tarea
}

//Paso 3 Funcion para escribir contactos en el json
const escribirContactos = (contactos) =>{
    const json = JSON.stringify(contactos, null, 2) 
    fs.writeFileSync(filePath, json, 'utf-8')
}

//Paso 4 Funcion para agregar un contacto nuevo
const agregarContacto = (nombreContacto, telefonoContacto, correoContacto) =>{
    const contactos = leerContactos() 
    contactos.push({id: contactos.length + 1, nombre: nombreContacto, telefono:telefonoContacto, correo:correoContacto}) 
    escribirContactos(contactos)
    console.log('Contacto agregado: ', nombreContacto, telefonoContacto, correoContacto);
}

//Paso 5 Funcion para listar todos los contactos
const listarContactos = () =>{
    const contactos = leerContactos() 
    console.log('Lista de contactos: ')
    contactos.forEach(contacto => {
        console.log(`${contacto.id}. ${contacto.nombre} Telefono ${contacto.telefono} Correo: ${contacto.correo}`)
    });
}

//Paso 6 Funcion para eliminar un contacto
const eliminarContacto = (idContacto) =>{
    let contactos = leerContactos()
    contactos = contactos.filter(contacto => contacto.id !== idContacto); 
    escribirContactos(contactos); 
    console.log('Contacto eliminado.');
}

// agregarContacto("Priscilla", 6461789065, "priscilla@gmail.com")
// agregarContacto("Alex", 6461589895, "alex@gmail.com")
// listarContactos()
// eliminarContacto(1)
listarContactos()