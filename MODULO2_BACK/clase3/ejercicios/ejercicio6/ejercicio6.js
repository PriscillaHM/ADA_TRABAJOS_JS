// Actividad 6: Gestión de un diario personal
// Consigna: Crea un programa que te permita gestionar un diario 
// personal. El programa debe permitirte:
// 1. Agregar una entrada al diario: Registrar una nueva entrada con 
// la fecha y el texto.
// 2. Listar las entradas: Mostrar todas las entradas registradas.
// 3. Eliminar una entrada: Eliminar una entrada específica por su ID

//Paso 1 Importacion
const fs = require('fs');
const filePath = './diario.json';

//Paso 2 funcion para leer el archivo
const leerDiario = () =>{
    if(!fs.existsSync(filePath)){
        fs.writeFileSync(filePath, '[]')
    }
    const contenido = fs.readFileSync(filePath, 'utf-8')
    return JSON.parse(contenido)
}

//PASO 3 Funcion para escribir en el json
const escribirDiario = (notas) =>{
    const json = JSON.stringify(notas, null,2)
    fs.writeFileSync(filePath, json, 'utf-8')
}

//PASO 4 Funcion para agregar una nueva nota
const agregarNota = (fecha, texto) =>{
    const notas = leerDiario()
    notas.push({id:notas.length + 1, fecha:fecha, texto:texto})
    escribirDiario(notas)
    console.log('Nota agregada al diario')
}

//PASO 5 Funcion para listar todas las notas
const listarNotas = () =>{
    const notas = leerDiario()
    console.log('Lista de las notas del Diario: ')
    notas.forEach(nota =>{
        console.log(`${nota.id}. ${nota.fecha}. Nota: ${nota.texto}`)
    })
}
 
//PASO 6 Funcion para eliminar una nota
const eliminarNota = (idNota) =>{
    let notas = leerDiario()
    notas = notas.filter(nota => nota.id !== idNota)
    escribirDiario(notas)
    console.log('Nota eliminada correctamente.')
}

// agregarNota('22/enero/2023', 'Hoy no tuve clase de Backend')
// agregarNota('22/enero/2023', 'Estoy trabajando en las clases pasadas del curso')
// listarNotas()
// eliminarNota(1)
listarNotas()
