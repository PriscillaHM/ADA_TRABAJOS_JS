// Ejercicio 2: Clases Abstractas - Sistema de Vehículos 
// Crea una clase abstracta Vehiculo con una propiedad velocidad y un método 
// abstracto mover(). Luego, implementa dos clases concretas: Auto y Bicicleta. Usa 
// los modificadores de acceso para controlar la visibilidad de las propiedades.

export abstract class Vehiculo{
    protected velocidad: number

    constructor(velocidad: number){
        this.velocidad = velocidad
    }

    abstract mover(): void

    acelerar(): void{
    this.velocidad += 10
      console.log(`Acelerando a ${this.velocidad} km/h`)
    }
}

class Auto extends Vehiculo{
    mover(): void {
        console.log('El auto se esta moviendo.')
    }
    
}

class Bicicleta extends Vehiculo{
    mover(): void {
        console.log('La Bicicleta se esta moviendo.')
    }
}

const auto = new Auto(50)
auto.acelerar()
auto.mover()

const bici = new Bicicleta(10)
bici.acelerar()
bici.mover()