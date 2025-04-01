// Actividad 7: Control de tareas diarias
// Consigna: Crea un programa para gestionar tus tareas diarias. El 
// programa debe permitirte:
// 1. Agregar una tarea diaria: Registrar una nueva tarea con su 
// descripción y estado.
// 2. Listar las tareas diarias: Mostrar todas las tareas con su estado.
// 3. Marcar una tarea como completada: Cambiar el estado de una 
// tarea de "pendiente" a "completada".

//PASO 1 importar
const fs = require('fs');
const filePath = './tareas.json';


//PASO 2 Funcion para leer el archivo JSON y leer las tareas
const leerTareas = () =>{
    if(!fs.existsSync(filePath)){
        fs.writeFileSync(filePath, '[]')
    }
    const contenido = fs.readFileSync(filePath, 'utf-8')
    return JSON.parse(contenido)
}

//PASO 3 Funcion para escribir tareas en el json
const escribirTareas = (tareas) =>{
    const json = JSON.stringify(tareas, null, 2) 
    fs.writeFileSync(filePath, json, 'utf-8')
}

//PASO 4 Funcion para agregar una tarea nueva 
const agregarTarea = (descripcion) =>{
    const tareas = leerTareas() 
    tareas.push({id: tareas.length + 1, descripcion, completada: false}) 
    escribirTareas(tareas)
    console.log('Tareas agregada: ', descripcion)
}

//PASO 5 Funcion para listar todas las tareas
const listarTareas = () =>{
    const tareas = leerTareas() 
    console.log('Lista de tareas: ')
    tareas.forEach(tarea => {
        const estado = tarea.completada ? 'Completada' : 'Pendiente' 
        console.log(`${tarea.id}. ${tarea.descripcion} - ${estado}`)
    });
}

//PASO 6 Funcion para marcar una tarea como completada
const completarTarea = (id) =>{
    const tareas = leerTareas() 
    const tarea = tareas.find((t) => t.id === parseInt(id))
    if(tarea){
        tarea.completada = true 
        escribirTareas(tareas)
        console.log('Tarea completada: ', tarea.descripcion);
    } else{
        console.log('Tarea no encontrada')
    }
}

// agregarTarea('Terminar ejercicios del curso')
// agregarTarea('Pagar la universidad')
// agregarTarea('Lavar la ropa')
listarTareas()
completarTarea(3)
listarTareas()