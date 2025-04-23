export class Animal{
    //Propiedades
    public nombre: string
    private tipoAlimento: string
    protected especie: string

    //Constructor
    constructor(nombre: string, tipoAlimento: string, especie: string){
        this.nombre = nombre
        this.tipoAlimento = tipoAlimento
        this.especie = especie
    }

    //Metodo publico accesible desde cualquier parte
    public describirAnimal(): void{
        console.log(`Este es ${this.nombre}, es de la especie ${this.especie}`)
    }

    private mostrarTipoAlimento(): void{
        console.log(`${this.nombre} se alimenta con ${this.tipoAlimento}`)
    }

    protected sonidoAnimal(): void{
        console.log(`${this.nombre} hace un sonido.`)
    }
} 

//Crear la instancia
const miAnimal = new Animal('Gato', 'croquetas', 'felina')
miAnimal.describirAnimal()