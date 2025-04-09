//1. Alias de tipo primitivo
//Alias para tipos basicos o primitivps como number, string y boolean
type ID = number //Alias para numeros (id representa un numero)
type nombre = string //alias para cadenas 
type activo = boolean //alias para booleano

//Usando los alias para declarar variables
let usuarioId: ID = 123 //Variable tipo ID (number)
let nombreUsuario: nombre = "Priscilla"
let cuentaActiva: activo = true
console.log(`Usuario: ${nombreUsuario}, ID: ${usuarioId}, Activa: ${cuentaActiva}`)

//2. Alias para objetos
//Alias oara definir un objeto complejo 
//En ese caso un adireccion con tres propiedades
type direccion = {
    calle: string,
    ciudad: string,
    codigoPostal: number
}
//Usamos el alias direccion para crear un objeto con las propiedades especificas
let miDireccion: direccion = {
    calle: 'Lomas de Nopolo',
    ciudad: 'Ensenada',
    codigoPostal: 22800
}
console.log(`Vivo en: ${miDireccion.calle}, ${miDireccion.ciudad}, ${miDireccion.codigoPostal}`)

//3. Alias para uniones de tipos
//Donde una variable puede tener uno o varios tipos posibles
type resultado = 'exito' | "error" //resultado solo puede ser exito o error
type idUsiario = string | number

//Usamos el alias resultado y idUsuario opara definir las variables
let estadoOperacion: resultado = 'exito'
let idUsuario1: idUsiario = 4358
let idUsuario2: idUsiario = 'P-4358'

console.log(`Estado de operacion: ${estadoOperacion}, id Usuario 1: ${idUsuario1}`)

//4. Alias para funciones
//Toma como argumento dos numeros y devuelve un numero, esto se usa para  definir la 'firma' de funciones 
//que deben cumplir con ciertos formatos
type operacionesMat = (a: number, b: number) => number

//Implementacion de dos funciones que siguen el formato de operacionesmMat
const sumar: operacionesMat = (a,b) => a + b
const restar: operacionesMat = (a,b) => a - b
console.log(`Sumar ${sumar(3,5)}. Restar ${restar(5,5)}`)

//5. Alias para arrays
//Puede ser array de numeros o cadenas
type listaNumeros = number[]
type listaCadenas = string[]

//Usamos los alias para crear arrays
let numeros: listaNumeros = [1,2,3,4,5]
let cadenas: listaCadenas = ['uno', 'dos', 'tres']
console.log(`Numeros: ${numeros.join(", ")}`)
console.log(`Cadenas: ${cadenas.join(", ")}`)