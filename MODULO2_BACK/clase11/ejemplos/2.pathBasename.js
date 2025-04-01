const path = require('path')

//Ejemplo 1: Obtener el nombre del archivo desde una ruta absoluta
const rutaAbsoluta = '/home/user/docs/file.txt'
const baseName1 = path.basename(rutaAbsoluta)
console.log('Ejemplo 1 Nombre del archivo: ', baseName1)

//Ejemplo2: Obtener nombre sin la extension
const baseName2 = path.basename(rutaAbsoluta, '.txt')
console.log('Ejemplo 2 Nombre del archivo sin extension: ', baseName2)

//Ejemplo 3: Uso con rutas relativas
const rutaRelativa = 'src/utils/helpers.js'
const baseName3= path.basename(rutaRelativa)
console.log('Ejemplo 3 Nombre ddel archivo desde una ruta relativa: ', baseName3)