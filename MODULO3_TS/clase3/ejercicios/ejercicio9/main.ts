import {Person, createPerson} from './types'

const person: Person = createPerson('Ana', 25)
console.log(`Nombre: ${person.name}, Edad: ${person.age}`)