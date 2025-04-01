const path = require('path')

//Ejemplo 1 Verificacion de una ruta absoluta en un sistema unix
const absolutePath1 = '/home/user/docs/file.txt'
const isAbsolute1 = path.isAbsolute(absolutePath1)
console.log('Ejemplo 1 Es una ruta absoluta?: ', isAbsolute1)

//Ejemplo 2 Verificacion de una ruta absoluta en un sistema windows
const absolutePath2 = 'C:\\Users\\pikilap\\documents\\file.txt'
const isAbsolute2= path.isAbsolute(absolutePath2)
console.log('Ejemplo 1 Es una ruta absoluta?: ', isAbsolute2)
