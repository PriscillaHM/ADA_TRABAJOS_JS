// Ejercicio 6: Sistema de Gestión de Productos Usando Abstracción y Clases  
// Crea un sistema de inventario que gestione diferentes tipos de productos. 
// Define una clase abstracta Producto con: 
// • Propiedades protegidas: nombre, precio. 
// • Un método abstracto calcularDescuento(). 
// Implementa dos subclases: Ropa y Electronica. 
// • La subclase Ropa aplicará un 10% de descuento. 
// • La subclase Electronica tendrá un 5% de descuento. 
// Añade un método concreto en la clase abstracta para mostrar la información del 
// producto. 
export abstract class Producto{
    protected nombre: string
    protected precio: number

    constructor(nombre: string, precio: number) {
        this.nombre = nombre
        this. precio = precio
    }

    abstract calcularDescuento(): number
}

class Ropa extends Producto{
    calcularDescuento(): number {
        return this.precio * 0.90
    }
}

class Electronica extends Producto{
    calcularDescuento(): number {
        return this.precio * 0.95
    }
}

const falda = new Ropa('falda', 250)
console.log(`El precio final de la falda es: ${falda.calcularDescuento()}`)

const laptop = new Electronica('laptop', 15000)
console.log(`El precio final de la laptop es: ${laptop.calcularDescuento()}`)