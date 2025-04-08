// Ejercicio 4: Función que devuelve un objeto 
// Consigna: Crea una función llamada crearLibro que acepte tres parámetros: 
// titulo (string), autor (string) y paginas (number). La función debe devolver un 
// objeto con esas propiedades. Luego, crea dos libros utilizando la función y 
// muestra sus detalles en la consola. 
const crearLibro = (titulo: string, autor: string, paginas: number): {titulo: string, autor: string, paginas: number} => {
    return {titulo, autor, paginas}
}

console.log(crearLibro('El Principito', 'Antoinede Saint-Exupery', 96))
console.log(crearLibro('Don Quijote de la mancha', 'Miguel de Cervantes',1560))