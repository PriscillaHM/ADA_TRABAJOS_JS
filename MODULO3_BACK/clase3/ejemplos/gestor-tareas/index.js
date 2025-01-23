const fs = require('fs');

const filePath = './tareas.json';

//Leemos los argumentos pasados desde la linea de comandos
const args = process.argv.slice(2)
const comando = args[0]; //primer argumento: el comando a ejecutar
const descripcion = args.slice(1).join(' ')//el resto de los argumentos: la descripcon de la tarea

//Funcion para leer el archivo JSON y leer las tareas
const leerTareas = () =>{
    const contenido = fs.readFileSync(filePath, 'utf-8')//leer archivo JSON
    return JSON.parse(contenido) //convertir el contenido json en un array de tarea
}

//Funcion para escribir tareas en el json
const escribirTareas = (tareas) =>{
    const json = JSON.stringify(tareas, null, 2) // convertir el array de tareas en formato json
    fs.writeFileSync(filePath, json, 'utf-8')//guarda el json en el archivo
}

//Funcion para agregar una tarea nueva 
const agregarTarea = (descripcion) =>{
    const tareas = leerTareas() //leer las tareas actuales
    tareas.push({id: tareas.length + 1, descripcion, completada: false}) //agregar una nueva tarea
    escribirTareas(tareas)//guardar las tareas actualizadas
    console.log('Tareas agregada: ', descripcion);
}

//Funcion para listar todas las tareas
const listarTareas = () =>{
    const tareas = leerTareas() //leer las tareas actuales
    console.log('Lista de tareas: ')
    tareas.forEach(tarea => {
        const estado = tarea.completada ? '✔️' : '❌' //mostrar si la tareas esta completada
        console.log(`${tarea.id}. ${tarea.descripcion} - ${estado}`)
    });
}

//Funcion para marcar una tarea como completada
const completarTarea = (id) =>{
    const tareas = leerTareas() //leer las tareas actuales
    const tarea = tareas.find((t) => t.id === parseInt(id))
    if(tarea){
        tarea.completada = true //marcar la tarea como completada
        escribirTareas(tareas)//guardar las tareas actualizadas
        console.log('Tarea completada: ', tarea.descripcion);
    } else{
        console.log('Tarea no encontrada')
    }
}

//Manejo de comandos 
if(comando === 'agregar'){
    agregarTarea(descripcion);
} else if(comando === 'listar'){
    listarTareas()
} else if(comando === 'completar'){
    completarTarea(descripcion)
} else {
    console.log('Comando no reconocido. Usa "agregar, listar o completar"')
} 