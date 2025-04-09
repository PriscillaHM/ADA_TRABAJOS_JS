import {
    add,
    subtract,
    capitalize,
    reverse,
    createUser
} from './index'

console.log(add(5,6))
console.log(subtract(8,3))
console.log(capitalize('hola'))
console.log(reverse('Hola'))
let usuario = createUser('Piki', 23)
console.log(usuario)