// Ejercicio 3: Métodos en Objetos 
// 1. Modifica el objeto del ejercicio anterior para que incluya un método 
// llamado descripcion() que devuelva una descripción del libro. 
// 2. Llama al método y muestra el resultado en la consola.

export let libro: {
    titulo: string,
    autor: string,
    anioPublicacion: number,
    descripcion(): string
} = {
    titulo: 'La batalla del Templo',
    autor: 'Jacobo Grinberg-Zylberbaum',
    anioPublicacion: 2024,
    descripcion: function() {
        return `El libro ${this.titulo}, fue escrito por ${this.autor} y publicado el anio ${this.anioPublicacion}`
    }
}

console.log(libro.descripcion())