// Ejercicio 5: Interfaz 
// 1. Define una interfaz llamada IPersona con propiedades nombre, edad y un 
// método presentarse(). 
// 2. Crea una clase llamada Persona que implemente esta interfaz y 
// proporciona la implementación del método presentarse().

interface IPersona {
    nombre: string
    edad: number
    presentarse: () => void
}

class Persona {
    persona1: IPersona = {
        nombre: 'Lucia',
        edad: 20,
        presentarse: function(){
            console.log(`Hola me llamo ${this.nombre} y tengo ${this.edad} anios.`)
        }
    }
}

const miPersona = new Persona()
miPersona.persona1.presentarse()