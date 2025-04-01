//PASO 1 Importamos las versiones de UUID que se usaran
const {v1: uuidv1, v3: uuidv3, v4: uuidv4, v5: uuidv5} = require('uuid')

//Ejemplo 1 UUID V1 Basado en tiempo
//Genera un uuid unico basado en la marca de tiempo y la MAC
const idv1 = uuidv1()
console.log('UUID V1 Basado en tiempo: ', idv1)

//Ejemplo 2 UUID V3 Basada en nombre y espacio de nombre
//Utiliza un nombre y un espacio para generar uuids
//Usando un hash MD5
const NAMESPACE = uuidv3.URL //Espacio de nombres
console.log('')