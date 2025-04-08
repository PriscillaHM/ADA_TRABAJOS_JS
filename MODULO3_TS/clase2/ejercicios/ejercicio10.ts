// Ejercicio 10: Funciones y arrays de objetos 
// Consigna: Crea una función llamada listarLibros que acepte un array de objetos 
// libro, donde cada libro tiene las propiedades titulo (string) y autor (string). La 
// función debe recorrer el array y mostrar los detalles de cada libro en la consola. 
type Libro = {
    titulo: string;
    autor: string;
}

let misLibros: Libro[] = [
    {
        titulo: 'El Principito',
        autor: 'Antoinede Saint-Exupery'
    },
    {
        titulo: 'Don Quijote de la mancha',
        autor: 'Miguel de Cervantes'
    }
]

const listarLibros = (libros: Libro[]) => {
    libros.forEach((libro, index) => {
        console.log(`Título: ${libro.titulo}`);
        console.log(`Autor: ${libro.autor}`);
    })
}

listarLibros(misLibros)