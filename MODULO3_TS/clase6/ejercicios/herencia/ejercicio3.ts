//Ejercicio 3: Herencia Múltiple Indirecta (vía Interfaces) 
// Consigna: Crea dos interfaces: Volador con el método volar() y Transportable 
// con el método transportar(). Luego crea una clase Avion que implemente ambas 
// interfaces y sobrescriba los métodos.
interface Volador{
    volar(): void
}

interface Transportable{
    transportar(): void
}

class Avion implements Volador, Transportable{
    volar(): void {
        console.log('Este avion esta volando...')
    }

    transportar(): void {
        console.log('Este avion transporta gente.')
    }

}

const avioncito = new Avion()
avioncito.volar()
avioncito.transportar()