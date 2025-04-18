//Ejemplo 1: asercion basica de tipo 'any' a 'string'
let valorGenerico: any = 'TypeScript es increible'
console.log(valorGenerico.length)

let longitudDeString: number = (valorGenerico as string).length
console.log(longitudDeString)

//Ejemolo 2 Aserciones con tipos de union
function obtenerNombreMayusculas(nombre: string | null): string {
    if(nombre){
        return (nombre as string).toUpperCase()
    } else {
        return 'Nombre no proporcionada'
    }
}
console.log(obtenerNombreMayusculas('lucia'))
console.log(obtenerNombreMayusculas(null))

//Ejemplo 3 Uso de aserciones con unknown
let valorDesconocido: unknown = 'Este es un valor desconocido'
//console.log(valorDesconocido.length)
if(typeof valorDesconocido  === 'string'){
    let longitud: number = (valorDesconocido as string).length
    console.log(`La longitus del string es: ${longitud}`)
}

//Ejemplo 4: Aserciones dobles (para convertir tipos incompatibles)
let valor: any = 'Este es un valor'
let valorNumerico = (valor as unknown as number)
console.log(`Valor numerico con asercion doble: ${valorNumerico}`)

//Ejemplo 5 Precauciones en aserciones
let valorErroneo: any = 42
let textoErroneo = valorErroneo as string
console.log(textoErroneo.length)