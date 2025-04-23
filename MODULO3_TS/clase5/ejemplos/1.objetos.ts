//Definicion de una interfaz
interface Estudiante{
    nombre: string
    edad: number
    materiaFav: string
    promedio: number

    saludar: () => void
    obtenerDetalles: () => string //Metodo que devuelve un string
}

//Creacion de un objeto que cumple con la interfaz Estudiante
const estudiante1: Estudiante = {
    nombre: 'Sofia',
    edad: 18,
    materiaFav: 'Matematicas',
    promedio: 9.5,

    //Implementacion de los metodos
    //Metodo 1 saludar
    saludar: function () {
        console.log(`Hola soy ${estudiante1.nombre}.`)
    },
    obtenerDetalles: function (){
        return `Nombre: ${estudiante1.nombre}, Edad: ${estudiante1.edad}, Promedio: ${estudiante1.promedio}`
    } 
}

//Uso del metodo saludar
estudiante1.saludar()
//Uso del metodo obtenerDetaller
const detalles = estudiante1.obtenerDetalles()
console.log(detalles)