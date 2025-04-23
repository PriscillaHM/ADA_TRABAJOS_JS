// Ejercicio 8: Integramos contenidos - Animales 
// 1. Crea un pequeño sistema de gestión de Animales que incluya las clases 
// Animal, Mascota, y MascotaExotica. 
// o La clase Animal debe tener propiedades como nombre y tipo. 
// o La clase Mascota debe extender Animal e incluir una propiedad para 
// dueño. 
// o La clase MascotaExotica debe extender Animal e incluir una 
// propiedad para habitat. 
// 2. Implementa métodos para mostrar información sobre cada tipo de animal 
// y agrega ejemplos de instanciación.

export class Animal{
    nombre: string
    tipo: string

    constructor(nombre: string, tipo: string) {
        this.nombre = nombre
        this.tipo = tipo
    }

    mostrarInformacion(): void{
        console.log(`${this.nombre} es un ${this.tipo}`)
    }
}

class Mascota extends Animal{
    duenio: string

    constructor(nombre: string, tipo: string, duenio: string){
        super(nombre, tipo)
        this.duenio = duenio
    }

    mostrarInformacion(): void {
        console.log(`${this.nombre} es un ${this.tipo}, y su duenia es ${this.duenio}`)
    }
}

class MascotaExotica extends Animal{
    habitat: string

    constructor(nombre: string, tipo: string, habitat: string){
        super(nombre, tipo)
        this.habitat = habitat
    }

    mostrarInformacion(): void {
        console.log(`${this.nombre} es un ${this.tipo} y su habitat es ${this.habitat}`)
    }
}

const animal1 = new Animal('Drako', 'Perro')
animal1.mostrarInformacion()

const mascota1 = new Mascota('Kenia', 'Perro', 'Ana')
mascota1.mostrarInformacion()

const mascotaExotica1 = new MascotaExotica('Pelusa', 'Serpiente', 'Zonas áridas')
mascotaExotica1.mostrarInformacion()