//Ejercicio 7: Libros
// Define dos objetos libro1 y libro2 con las siguientes propiedades y valores:
// ✓ título: una cadena con el título del libro.
// ✓ autor: una cadena con el nombre del autor del libro.
// ✓ anioPublicacion: un número con el año de publicación del libro.
// Luego, crea una función llamada mostrarLibro que tome un arreglo de libros 
// como parámetro y muestre por consola la información de cada libro en el 
// formato especificado
let libro1 = {
    titulo: 'Maria Marquez',
    autor: 'Felipe Ochoa',
    anioPublicacion: 2015,
};

let libro2 = {
    titulo: 'La ballena',
    autor: 'Ania Lopez',
    anioPublicacion: 2015,
};

let arregloLibros = [libro1, libro2]

let mostrarLibro = (arregloLibros) => {
    for(let i = 0; i < arregloLibros.length; i++){
        console.log('El nombre del libro es: ' + arregloLibros[i].titulo);
        console.log('El autor del libro es: '+ arregloLibros[i].autor);
        console.log('El anio de publicacion del libro es: ' + arregloLibros[i].anioPublicacion);
    }
}

mostrarLibro(arregloLibros);
