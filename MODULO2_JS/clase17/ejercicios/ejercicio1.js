//Ejercicio 1: Manipulación Completa de un Objeto Literal y Arrays
let estudiante = {
    nombre: 'Juan Perez',
    edad: 20,
    notas: [10, 8, 9, 10, 8]
};

let procesarEstudiante = (estudiante) =>{
   estudiante.notas.push(10);
   estudiante.notas.shift();
   let suma = estudiante.notas.reduce((acum, nota) => acum + nota, 0);
   let promedio = suma / estudiante.notas.length;
   let nombreMayusculas = estudiante.nombre.toUpperCase()
   return {
    nombre: nombreMayusculas,
    promedio: promedio
   }
}
console.log(procesarEstudiante(estudiante));
