// Actividad 3: Crear una función genérica 
// Crea una función genérica que tome un parámetro de cualquier tipo y lo 
// devuelva. Prueba la función con diferentes tipos de datos.

function generica<T>(valor: T): T {
    return valor
}

export let numero = generica<number>(10)
console.log(`Ejemplo de uso con tipo number: ${numero}`)

let texto = generica<string>('Hola')
console.log(`Ejemplo de uso con tipo string ${texto}`)

let boolean = generica<boolean>(true)
console.log(`Ejemplo de uso con tipo boolean: ${boolean}`)