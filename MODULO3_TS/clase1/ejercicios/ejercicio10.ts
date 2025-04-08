// Ejercicio 10: Uso de objetos 
// Declara un objeto en TypeScript con propiedades de tipo string, number y 
// boolean. Accede a estas propiedades e imprímelas en la consola. 

let dog:{name: string, age: number, isBarking: boolean} = {
    name: 'Drako',
    age: 5,
    isBarking: false
}

console.log(`${dog.name} is a ${dog.age} years old dog, is he barking? ${dog.isBarking}.`)
