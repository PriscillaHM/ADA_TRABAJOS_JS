// Ejercicio 4: Herencia de Métodos y Sobrescritura  
// Consigna: Define una clase base Flor con el método describir(), que imprime un 
// mensaje general sobre la flor. Luego, crea dos clases derivadas Rosa y Girasol, 
// cada una sobrescribiendo el método describir() con un mensaje específico. 
class  Flor{
    describir(): void{
        console.log('Esta flor tiene muchos colores.')
    }
}

class Rosa extends Flor{
    describir(): void {
        console.log('La rosa es de color rojo.')
    }
}

class Girasol extends Flor{
    describir(): void {
        console.log('El girasol es de color amarillo.')
    }
}

const miFlor = new Flor
miFlor.describir()

const miRosa = new Rosa
miRosa.describir()

const miGirasol = new Girasol
miGirasol.describir()