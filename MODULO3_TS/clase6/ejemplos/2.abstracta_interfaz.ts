//Ejemplo practico
//Imagenemos un sistema de gestion de trabsporte donde queremos definir vehiculos que se mueven de 
// diferentes maneras
//Usaremos una clase abstracta "Vehiculo" para definir el comportamiento general de todos los vehiculos y crearemos una
//interfaz 

//Interfaz para vehiculos electricos
interface Electrico {
    cargarBateria(): void
}

//Clase abstracta para todos los vehiculos
abstract class Vehiculo {
    constructor(protected tipo: string) {}

    //Metodo abstracto
    abstract moverse(): void
   
    //Metodo concreto
    describir(): void{
        console.log(`Este es un vehiculo tipo ${this.tipo}`)
    }
}

//Clase concreta ue extiende de la clase abstracta e implementa una interfaz
class AutoElectrico extends Vehiculo implements Electrico{
    constructor(){
        super('Auto electrico')
        
    }

    moverse(): void{
        console.log('El auto se mueve silenciosamente...')
    }

    cargarBateria(): void {
        console.log('Cargando la bateria del auto...')
    }
}

const tesla = new AutoElectrico()
tesla.describir()
tesla.moverse()
tesla.cargarBateria()
