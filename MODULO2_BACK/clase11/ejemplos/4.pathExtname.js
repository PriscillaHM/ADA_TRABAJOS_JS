const path = require('path')

//Ejemplo 1 Obtener la extension de un archivo desde una ruta absoluta 
const filePath = '/home/user/docs/file.txt'
const ejemplo1 = path.extname(filePath)
console.log('Ejemplo 1 Extension del archivo: ', ejemplo1)

//Ejemplo 2 Obtener la extrension de un archivo desde una ruta relativa
const relativePath = 'src/utils/helpers.js'
const ejemplo2 = path.extname(relativePath)
console.log('Ejemplo 2 Extension del archivo: ', ejemplo2)

//Ejemplo 3 Manejo de archivo sin extension
const noExtPath = '/home/user/docsREADME'
const ejemplo3 = path.extname(noExtPath)
console.log('Ejemplo 3 Extension de archivo sin extension: ', ejemplo3) 