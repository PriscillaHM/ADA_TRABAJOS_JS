//1. Definimos un objeto basico
let auto = {
    marca: 'Toyota',
    modelo: 'Corolla',
    anio: 2022
}

//Mostramos la propiedades del objeto en consola
console.log(`Marca: ${auto.marca}, Modelo: ${auto.modelo}, Anio ${auto.anio}`)

//2. Declaracion explicita de un objeto
let libro: {titulo: string; autor: string; anio: number} = {
    titulo: '100 anios de soledad',
    autor: 'Garcia Marquez',
    anio: 1984
}

//Mostramos la propiedades del objeto en consola
console.log(`Titulo: ${libro.titulo}, Autor: ${libro.autor}, Anio: ${libro.anio}`)

//3. Propiedades opcionales
let estudiate: {nombre: string; edad?: number} = {
    nombre: 'Piki',
    //edad: 23
}
console.log(`Nombre: ${estudiate.nombre}, Edad: ${estudiate.edad ?? 'Desconocida'}`)

//4. Metodo en un obejto
let perro = {
    nombre: 'Drako',
    raza: "Husky",
    ladrar: function() {
        return `${this.nombre} esta ladrando`
    }
}
console.log(perro.ladrar())