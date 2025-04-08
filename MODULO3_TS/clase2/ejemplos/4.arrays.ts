//Declaracion de un array simple
let frutas: string[] = ['manzana', 'banana', 'pera ']
console.log('Array original: ', frutas)

//Agregamos una fruta
frutas.push('naranja')
console.log('Agregamos una fruta al final: ',frutas)

//Eliminamos la ultima fruta
frutas.pop()
console.log('Eliminamos la ultima fruta: ', frutas)

//Combiamos todos los elementos del array en una cadena
let cadenaFrutas = frutas.join(' - ')
console.log('Combiamos todos los elementos del array en una cadena: ', cadenaFrutas)