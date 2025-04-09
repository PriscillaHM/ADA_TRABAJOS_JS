//Declaracion e inicializacion de la tupla
export let persona: [string, number]

//Inicilizacion de la tupla
persona = ['Ana', 25]

//Accedemos a laos elemcnetos de la tupla
console.log('Nombre: ', persona[0])
console.log('Edad: ', persona[1])

//Modificamos la tupla
persona[1] = 28
console.log('Edad actulizada: ', persona[1])

//Desestructuracion de la tupla
let [nombre, edad] = persona
console.log(`La persona se llama ${nombre} y tiene ${edad} anios`)