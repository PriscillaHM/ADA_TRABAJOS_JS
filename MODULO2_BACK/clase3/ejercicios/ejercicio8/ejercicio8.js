// Actividad 8: Seguimiento de proyectos
// Consigna: Crea un programa para gestionar proyectos. El programa debe 
// permitirte:
// 1. Agregar un proyecto: Registrar un proyecto con su nombre y 
// estado (pendiente o en progreso).
// 2. Listar los proyectos: Mostrar todos los proyectos registrados.
// 3. Actualizar el estado de un proyecto: Cambiar el estado de un 
// proyecto a "finalizado" o "en progreso".

//PASO 1 Importacion
const fs = require('fs')
const filePath = './proyectos.json'

//PASO 2 Funcion para leer el archivo JSON 
const leerProyectos = () =>{
    if(!fs.existsSync(filePath)){
        fs.writeFileSync(filePath, '[]')
    }
    const contenido = fs.readFileSync(filePath, 'utf-8')
    return JSON.parse(contenido)
}

//PASO 3 Funcion para escribir proyectos en el json
const escribirProyectos = (proyectos) =>{
    const json = JSON.stringify(proyectos, null, 2)
    fs.writeFileSync(filePath, json, 'utf-8')
}

//PASO 4 Funcion para agregar un nuevo proyecto
const agregarProyecto = (nombre) =>{
    const proyectos = leerProyectos()
    proyectos.push({id: proyectos.length + 1, nombre:nombre, finalizado: false})
    escribirProyectos(proyectos)
    console.log('Proyecto agregado: ', nombre)
}

//PASO 5 Funcion para listar todos los proyectos
const listarPoryectos = () =>{
    const proyectos = leerProyectos()
    console.log('Lista de proyectos: ')
    proyectos.forEach(proyecto =>{
        const estado = proyecto.finalizado ? 'Finalizado' : 'En progreso'
        console.log(`${proyecto.id}. ${proyecto.nombre} - ${estado}`)
    })
}

//PASO 6 Funcion para marcar el proyecto como finalizado o en progreso
const finalizarProyecto = (id) =>{
    const proyectos = leerProyectos()
    const proyecto = proyectos.find(proyecto => proyecto.id === parseInt(id))
    if(proyecto){
        proyecto.finalizado = true
        escribirProyectos(proyectos)
        console.log('Proyecto finalizado: ', proyecto.nombre)
    } else{
        console.log('Proyecto no encoentrado')
    }
}

// agregarProyecto('Proyecto clase Introduccion a JS')
// agregarProyecto('Proyecto clase Introduccion a NodeJs')
// listarPoryectos()
// finalizarProyecto(1)
listarPoryectos()