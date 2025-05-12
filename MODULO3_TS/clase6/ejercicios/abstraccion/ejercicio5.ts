// Ejercicio 5: Decidir Entre Clases Abstractas e Interfaces 
// Diseña un sistema de transporte público. Define: 
// • Una interfaz VehiculoElectrico con el método cargarBateria(). 
// • Una clase abstracta Transporte con el método abstracto mover(). 
// Implementa ambas estructuras en una clase concreta AutobusElectrico.

interface VehiculoElectrico{
    cargarBateria(): void
}

abstract class Transporte{
    abstract mover(): void
}

class AutobusElectrico extends Transporte implements VehiculoElectrico{
    cargarBateria(): void {
        console.log('La bateria esta cargando...')
    }

    mover(): void {
        console.log('El autobus se esta moviendo...')
    }
}

const autobus = new AutobusElectrico
autobus.cargarBateria()
autobus.mover()