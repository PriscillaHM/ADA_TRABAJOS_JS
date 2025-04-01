// Actividad 1: Registro de libros favoritos

//PASO 1 IMPORTACION
const fs = require('fs');
const filePath = './libros.json';

//PASO 2 Funcion para leer los libros desde el archivo
const leerLibros = () =>{
    //si el archivo no existe creamos un archivo vacio con un arreglo
    if(!fs.existsSync(filePath)){
        fs.writeFileSync(filePath, '[]')
    }
    const contenido = fs.readFileSync(filePath, 'utf-8')//leemos el archivo 
    return JSON.parse(contenido) //convetir el contenido a un arreglo de libros
}

//PASO 3 Funcion para escribir los libros en el archivo JSON
const escribirLibros = (libros) =>{
    fs.writeFileSync(filePath, JSON.stringify(libros, null,2))
}

//PASO 4 Funcion para agregar un libro
const agregarLibro = (nombreLibro) =>{
    const libros = leerLibros()//leer los libros existentes
    libros.push({id: libros.length + 1, nombre:nombreLibro}) //agregar un nuevo libro
    escribirLibros(libros) //guardar la lista actualizada
    console.log('Libro agregado: ', nombreLibro)
}

//PASO 5 Funcion pata listar libros
const listarLibros = () =>{
    const libros = leerLibros()
    console.log('Lista de libros favoritos: ')
    libros.forEach(libro => {
        console.log(`${libro.id}. ${libro.nombre}`)
    });
}

//Ejemplo de uso de las funciones
agregarLibro('El principito')
listarLibros()
agregarLibro('Harry Potter')
agregarLibro('Yo antes de ti')
agregarLibro('Las mujeres que aman demasiado')
listarLibros()