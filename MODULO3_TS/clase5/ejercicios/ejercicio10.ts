// Ejercicio 10: Registro de Estudiantes 
// 1. Crea un sistema para registrar Estudiantes con las siguientes clases: 
// o Estudiante: Clase que incluye propiedades como nombre, edad y 
// curso, además de un método que muestre la información del 
// estudiante. 
// o RegistroEstudiantes: Clase que maneje una lista de estudiantes, con 
// métodos para agregar un estudiante y mostrar todos los estudiantes 
// registrados. 

class Estudiante{
    nombre: string
    edad: number
    curso: string

    constructor(nombre: string, edad: number, curso: string) {
        this.nombre = nombre
        this.edad = edad
        this.curso = curso
    }

    public mostrarInformacion(): void{
        console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}, Curso: ${this.curso}`)
    }
}
// o RegistroEstudiantes: Clase que maneje una lista de estudiantes, con 
// métodos para agregar un estudiante y mostrar todos los estudiantes 
// registrado
class RegistroEstudiantes{
    estudiantes: Estudiante[] = []

    public agregarEstudiante(nuevoEstudiante: Estudiante): void{
        this.estudiantes.push(nuevoEstudiante)
    }

    public mostrarEstudiantes(): void{
        this.estudiantes.forEach(estudiante => estudiante.mostrarInformacion());
    }
}

const listEstudiantes = new RegistroEstudiantes()
export const estudiante1 = new Estudiante('Cristal', 18, 'Historia')
const estudiante2 = new Estudiante('Jose', 18, 'Geografia')

listEstudiantes.agregarEstudiante(estudiante1)
listEstudiantes.agregarEstudiante(estudiante2)
listEstudiantes.mostrarEstudiantes()

