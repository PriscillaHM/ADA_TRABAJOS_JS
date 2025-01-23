// Ejercicio 2: Conversión de Objetos JavaScript a JSON

const estudiante = {
    nombre: "Priscilla Hurtado",
    edad: 23,
    curso: "Modulo 3 Backend",
    notas: [100, 100, 99, 100]
}

// Convierte este objeto a una cadena JSON usando JSON.stringify().
const estudianteJSON = JSON.stringify(estudiante);

// Muestra la cadena JSON en la consola.
console.log(estudianteJSON);

// Luego, convierte la cadena JSON de nuevo a un objeto utilizando 
// JSON.parse() y muestra el objeto en la consola.
const estudianteObjeto = JSON.parse(estudianteJSON);
console.log(estudianteObjeto);