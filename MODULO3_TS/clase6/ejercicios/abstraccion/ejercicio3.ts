// Ejercicio 3: Interfaces - Sistema de Gestión de Usuarios 
// Crea una interfaz Usuario que tenga las propiedades: 
// • nombre (obligatoria). 
// • edad (opcional). 
// • readonly id (solo lectura). 
// Implementa esta interfaz en una clase UsuarioConcreto. Luego, intenta 
// modificar la propiedad id para mostrar cómo se aplican las restricciones de solo 
// lectura.

interface Usuario{
    nombre: string
    edad?: number
    readonly id: number
}

class UsuarioConcreto implements Usuario{
    constructor(public nombre: string, public id: number, public edad?: number){}  
}

const nuevoUsuario = new UsuarioConcreto('Lucia', 1, 25)
console.log(nuevoUsuario)

nuevoUsuario.id = 23