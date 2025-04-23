//Definimos una clase 
class Gato {
    //Propiedades
    public nombre: string
    public edad: number
    private raza: string

    //Contructor
    constructor(nombre: string, edad: number, raza: string){
        this.nombre = nombre
        this.edad = edad
        this.raza = raza
    }

    //Metodos para obtener info del gato
    public obtenerInfo(): string{
        return `Nombre: ${this.nombre}, Edad: ${this.edad}, Raza: ${this.raza}`
    }
    //Metodo para cambiar la raza del gato
    public cambiarRaza(nuevaRaza: string): void{
        this.raza = nuevaRaza
    }
}

//Creamos una instancia de la clase Gato
const gato1 = new Gato('Larry', 3, 'Siames')

//Llamamos al metodo obtener info
console.log(gato1.obtenerInfo())

//Cambiar raza
gato1.cambiarRaza('persa')
console.log(gato1.obtenerInfo())