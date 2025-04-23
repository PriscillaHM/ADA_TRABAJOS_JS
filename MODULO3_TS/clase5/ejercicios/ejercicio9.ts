// Ejercicio 9: Sistema de Gestión de Vehículos 
// 1. Crea un sistema de gestión de Vehículos que incluya las siguientes clases: 
// o Vehiculo: Clase base con propiedades como marca, modelo y un 
// método para mostrar información del vehículo. 
// o Coche: Clase que extiende Vehiculo e incluye una propiedad para 
// tipoCombustible y un método para mostrar la información completa 
// del coche. 
// o Motocicleta: Clase que extiende Vehiculo e incluye una propiedad 
// para cilindrada y un método para mostrar la información completa 
// de la motocicleta. 

export class Vehiculo{
    marca: string
    modelo: string

    constructor(marca: string, modelo: string) {
        this.marca = marca
        this.modelo = modelo
    }

    mostrarInformacion(): void{
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}`)
    }
}

class Coche extends Vehiculo{
    tipoCombustible: string

    constructor(marca: string, modelo: string, tipoCombustible: string) {
        super(marca, modelo)
        this.tipoCombustible = tipoCombustible
    }

    mostrarInformacion(): void {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Tipo de combustible: ${this.tipoCombustible}`)
    }
}

class Motocicleta extends Vehiculo{
    cilindrada: string

    constructor(marca: string, modelo: string, cilindrada: string) {
        super(marca, modelo)
        this.cilindrada = cilindrada
    }

    mostrarInformacion(): void {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Cilindrada: ${this.cilindrada}`)
    }
}

const vehiculo1 = new Vehiculo('Toyota', 'Corolla')
vehiculo1.mostrarInformacion()

const coche1 = new Coche('Toyota', 'Corolla', 'Gasolina')
coche1.mostrarInformacion()

const moto1 = new Motocicleta('Susuki', 'Burgman', '125cc')
moto1.mostrarInformacion()
