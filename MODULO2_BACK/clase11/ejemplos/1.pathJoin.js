//Importar path
const path = require('path')

//Ejemplo 1: Uniendo segmentos de rutas simples
//Unimos strs segmentos de ruta:
const ejemplo1 = path.join('/user', 'local', 'bin')
console.log('Ejemplo 1 - Ruta combinada: ', ejemplo1)

//Ejemplo 2: Eliminar barra redundantes
const ejemplo2 = path.join('/user/', '/local/', 'bin/')
console.log('Ejemplo 2 - Rutas normalizadas sin barras redundantres: ', ejemplo2)

//Ejemplo 3: Normalizar rutas con '..'
//Este ejemplo muetra como path.join maneja el segmento especial .. que indica subir de directorio
const ejemplo3 = path.join('/user', 'local','..','bin/')
console.log('Ejemplo 3 - Rutas normalizadas con "..": ', ejemplo3)

//Ejemplo 4: Construccion de una ruta relativa multiplataforma
//Creamos una ruta relativa que funcione en cualquier sistema operativo 
//En unix el resultado sera con la barra /
//En windows el resultado sera con la barra \
//path.join garantizaque se usen las barras segun el sistema operativo vigente
const ejemplo4 = path.join('docs', 'projects','index.html')
console.log('Ejemplo 4 - Rutas relativa: ', ejemplo4)