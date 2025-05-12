//Ejercicio 1 Harencia Simple
// Consigna: Define una clase base Torta que tenga propiedades generales como 
// nombre y tipo, y un método hacerDescripcion() que devuelva una descripción 
// general de la torta. Luego, crea una clase derivada TortaDeChocolate que 
// extienda de Torta y sobrescriba el método hacerDescripcion() para que devuelva 
// "Soy una torta de chocolate, deliciosa y suave." 
class Torta{
    name: string
    tipo: string


    constructor(name: string, tipo: string){
        this.name = name
        this.tipo = tipo
    }

    hacerDescripcion(): void{
        console.log(`Esta torta ${this.name} es conocida como ${this.tipo}`)
    }
}

class TortaDeChocolate extends Torta{
    constructor(name: string, tipo: string){
        super(name, tipo)
    }

    hacerDescripcion(): void {
        console.log('Soy una torta de chocolate deliciosa y suave')
    }
}

const tortita = new Torta ('Chocolatosa', 'Tres leches')
tortita.hacerDescripcion()

const myTorta = new TortaDeChocolate('Redtorta', 'Red velvet')
myTorta.hacerDescripcion()