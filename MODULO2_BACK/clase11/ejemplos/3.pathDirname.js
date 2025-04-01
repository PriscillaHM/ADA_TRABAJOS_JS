const path = require('path')

//Ejemplo 1: Obtener eel directorio contenedor de un archivo desde una ruta absoluta
const filePath = 'home/user/docs/file.txt'
const dirName1 = path.dirname(filePath)
console.log('Ejemolo 1 Directorio contenedor de file.txt: ', dirName1)

//Ejemplo 2: Obtener el directorio de un archivo de una ruta relativa
const relativePath = 'src/utils/helper.js'
const dirName2= path.dirname(relativePath)
console.log('Ejemolo 2 Directorio contenedor de helpers.js: ', dirName2)

//Ejemplo 3: Obtener directorio padre de un directorio 
const dir = '/var/www/html/'
const dirName3= path.dirname(dir)
console.log('Ejemolo 3 Directorio padre de /var/www/html/: ', dirName3)