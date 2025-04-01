const path = require('path')

//Ejemplo 1 Normalizacion de una ruta con barras redundantes y puntos de navegacion
const rawPath1 = '/home/user/docs/./file.txt'
const normalizaPath1 = path.normalize(rawPath1)
console.log('Ejemplo 1 Ruta normalizada: ', normalizaPath1)

//Ejemplo 2 Normalizacion de una ruta con navegacion hacia arriba
const rawPath2 = '/home/user/docs/../images/file.jpg'
const normalizaPath2 = path.normalize(rawPath2)
console.log('Ejemplo 2 Ruta normalizada con navegacion hacia arriba: ', normalizaPath2)

//Ejemplo 3 Normalizacion de una ruta con multiples puntos de navegacion
const rawPath3 = '/home/user/docs/../../file.txt'
const normalizaPath3 = path.normalize(rawPath3)
console.log('Ejemplo 3 Ruta normalizada con multiples puntos de navegacion: ', normalizaPath3)