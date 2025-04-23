// Ejercicio 2: Creación de Objetos y Atributos 
// 1. Define un objeto que represente un libro con las siguientes propiedades: 
// título, autor, y año de publicación. 
// 2. Crea una instancia de ese objeto y muestra sus propiedades en la consola. 

export let libro: {
    titulo: string,
    autor: string,
    anioPublicacion: number,
} = {
    titulo: 'La batalla del Templo',
    autor: 'Jacobo Grinberg-Zylberbaum',
    anioPublicacion: 2024
}

console.log(libro)