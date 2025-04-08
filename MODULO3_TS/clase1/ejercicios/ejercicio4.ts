// Ejercicio 4: Parámetros opcionales simulados 
// Declara dos variables, una para almacenar un nombre y otra para almacenar una 
// edad. Si la edad no se asigna, debes imprimir un mensaje que diga "Edad no 
// proporcionada". Si se asigna la edad, imprímela junto al nombre.

export let nombre: string = 'Priscilla'
export let edad: any

console.log(`${nombre} tiene ${edad ?? 'Edad no proporcionada'}`)