// Actividad 3: Registro de tareas pendientes
// Consigna: Crea un programa para gestionar tus tareas pendientes. El 
// programa debe permitirte:
// 1. Agregar una tarea: Registrar una tarea pendiente con su 
// descripción.
// 2. Listar las tareas: Mostrar todas las tareas registradas.
// 3. Eliminar una tarea: Eliminar una tarea de la lista.

//Paso 1 Importacion
const fs = require('fs');
const filePath = './tareas.json';


//Paso 2 Funcion para leer el archivo 
const leerTareas = () =>{
    if(!fs.existsSync(filePath)){
        fs.writeFileSync(filePath, '[]')
    }
    const contenido = fs.readFileSync(filePath, 'utf-8')//leemos el archivo 
    return JSON.parse(contenido) //convertir el contenido json en un array de tarea
}

//Paso 3 Funcion para escribir tareas en el json
const escribirTareas = (tareas) =>{
    const json = JSON.stringify(tareas, null, 2) // convertir el array de tareas en formato json
    fs.writeFileSync(filePath, json, 'utf-8')//guarda el json en el archivo
}

//Paso 4 Funcion para agregar una tarea nueva 
const agregarTarea = (descripcion) =>{
    const tareas = leerTareas() //leer las tareas actuales
    tareas.push({id: tareas.length + 1, descripcion}) //agregar una nueva tarea
    escribirTareas(tareas)//guardar las tareas actualizadas
    console.log('Tareas agregada: ', descripcion);
}

//Paso 5 Funcion para listar todas las tareas
const listarTareas = () =>{
    const tareas = leerTareas() //leer las tareas actuales
    console.log('Lista de tareas: ')
    tareas.forEach(tarea => {
        console.log(`${tarea.id}. ${tarea.descripcion}`)
    });
}

//Paso 6 Funcion para eliminar una tarea
const eliminarTarea = (idTarea) =>{
    let tareas = leerTareas()
    tareas = tareas.filter(tarea => tarea.id !== idTarea); // Filtramos para eliminar la tarea por ID
    escribirTareas(tareas); // Guardamos la lista actualizada
    console.log('Tarea eliminada.');
}

// agregarTarea('Hacer la compra');
// listarTareas();
// eliminarTarea(1);
listarTareas();