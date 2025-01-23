// Importa el array desde estudiantes.js
const estudiantes = require("./estudiate");

// Muestra en la consola los nombres de todos los estudiantes
console.log('Nombre de los estudiantes: ');
for(let i = 0; i < estudiantes.length; i++){
    console.log(estudiantes[i].nombre);
}

// Calcula y muestra el promedio de notas de un estudiante específico.
let promedio = 0;
let suma = 0;
for(let i = 0; i < estudiantes[0].notas.length; i++){
    suma = suma + estudiantes[0].notas[i];
    promedio = suma / estudiantes[0].notas.length;
}
console.log('El promedio de ', estudiantes[0].nombre, 'es: ', promedio);

// Agrega un nuevo estudiante al array y muestra el array actualizado en formato JSON
const nuevoEstudiante = {
    nombre: "Irma",
    edad: 20,
    curso: "Backend",
    notas: [89, 79, 95, 100]
}

estudiantes.push(nuevoEstudiante);

const estudiantesJSON = JSON.stringify(estudiantes);
console.log('JSON estudiantes: ', estudiantesJSON);