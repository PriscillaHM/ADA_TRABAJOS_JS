//Tipos diferenciados en TS

//1. Any: permite almancenar cualquier tipo de valor sin restriccion
let anyValue: any = "Hola soy Any"
console.log(anyValue)
anyValue = 42
console.log(anyValue)
anyValue = {name: "TS"}
console.log(anyValue)

//2. Unknow: Similar a any pero requiere verificacion antes de su uso
let unknow: unknown = 'Hola soy unknow'
console.log(unknow)

//3. void: se usa en funciones que retornan calor
function logMessage (message: string): void{
    console.log(message)
}
logMessage('Esto es una funcion void')

//4. never
function infiniteLop(): never{
    while(true){
        console.log('Este bucle no termina')
    }
}
//infiniteLop()

//5. null y undefined
let valueNull: string | null = null
console.log(valueNull)

valueNull = 'Ahora tiene un valor'
console.log(valueNull)