//Clse base - Clase padre
class Animal{
    name: string

    //Constructor: Inicializa la propiedad
    constructor(name: string){
        this.name = name
    }

    //Metodo que imprime un sonido generico de animal
    makeSound(): void{
        console.log(`${this.name} hace un sonido`)
    }
}

//Clse derivada - Clase hijo
class Dog extends Animal{
    breed: string;

    constructor(name: string, breed: string){
        super(name) //Llama al constructor de la clase base Animal para inicializar name
        this.breed = breed //Inicializamos la propiedad breed
    }

    //Sobre escritura del metodo makeSound
    makeSound(): void {
        console.log(`${this.name} ladra`) //Cambia el sonido especifico para los perros
    }

    fetch(): void{
        console.log(`${this.name} esta buscando la pelota`) //El perro realiza la accion de buscar la pelota
    }
}

//Instanciar objetos de la clase base y derivada
const animalGenerico = new Animal ('Animal') //Creacion de un objeto de la clase base Animal
animalGenerico.makeSound()

const myDog = new Dog('Drako', 'Husky')
myDog.fetch()