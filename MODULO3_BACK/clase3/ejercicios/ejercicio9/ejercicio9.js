// Actividad 9: Registro de eventos
// Consigna: Crea un programa para registrar eventos. El programa debe 
// permitirte:
// 1. Agregar un evento: Registrar un evento con nombre, fecha y 
// lugar.
// 2. Listar los eventos: Mostrar todos los eventos registrados.
// 3. Eliminar un evento: Eliminar un evento de la lista.

//Paso 1 Importacion
const fs = require('fs')
const filePath = './eventos.json'

//Paso 2 Funcion para leer el archivo
const leerEventos = () =>{
    if(!fs.existsSync(filePath)){
        fs.writeFileSync(filePath, '[]')
    }
    const contenido = fs.readFileSync(filePath, 'utf-8')
    return JSON.parse(contenido)
}

//Paso 3 Fucion para escribir en el archivo
const escribirEventos = (eventos) =>{
    const json = JSON.stringify(eventos, null, 2)
    fs.writeFileSync(filePath, json, 'utf-8')
}

//Paso 4 Funcion para agregar un nuevo evento
const agregarEvento = (nombreEvento, fechaEvento, lugarEvento) =>{
    const eventos = leerEventos()
    eventos.push({id: eventos.length + 1, nombre: nombreEvento, fecha: fechaEvento, lugar: lugarEvento})
    escribirEventos(eventos)
    console.log('Evento agregado: ', nombreEvento)
}

//Paso 5 Funcion para listar todos los eventos
const listrarEventos = () =>{
    const eventos = leerEventos()
    console.log('Lista de eventos: ')
    eventos.forEach(evento =>{
        console.log(`${evento.id}. ${evento.fecha}. ${evento.nombre} ${evento.lugar}`)
    })
}

//Paso 6 Funcion para eliminar un evento
const eliminarEvento = (idEvento) =>{
    let eventos = leerEventos()
    eventos = eventos.filter(evento => evento.id !== idEvento) 
    escribirEventos(eventos)
    console.log('Evento eliminado correctamente.')
}

// agregarEvento('Cumple Piki', '01/10/2025', 'Casa Piki')
// agregarEvento('Cumple Drako', '20/10/2025', 'Casa Drako')
// agregarEvento('Cumple Kenai', '20/05/2025', 'Casa Kenai')
// listrarEventos()
// eliminarEvento(2)
listrarEventos()