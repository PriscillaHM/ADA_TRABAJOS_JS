//PASO 1 Importamos el modulo
const fs = require('fs');

//PASO 2 Configuramos una variable de nombre datos que tiene los datos a persistir
datos = 'Ejemplo de datos que podemos escribir en un archivo'

//PASO 3 Utilizamos el modulo fs 'writeFile' que nos permita escribir datos en el archivo
//  1. writeFile: crea el archivo por nosotras, el nombre de dicho archivo lo pasamos como primer parametro
//  2. Segundo parametro es donde guardamos los datos, en este caso es una variable
//  3. Tercer parametro hace refeencia a que hacer si ocurre un error.  va a dar lugar a que se lance el 
//     error con un mensaje determinado
fs.writeFile('archivo.txt', datos, (err) =>{
    if(!err){
        console.log('Los datos han sido escritos a archivo.txt');
    } else{
        throw err
    }
})

//PASO 4 Extras:
//Errores: En este tipo de archivos tienen que ver principalmente con intentar escribir en un
//archivo dentro de un director en el cual no tenemos acceso/permiso para escribir

//Donde se guarda el archivo: El archivo se va a guardar excatamente en el mismo lugar donde se encuentre el script
//que lo ejecuta, en este caso este archivo si quisieramos que se guardara en cualquier otra ruta
//tenemos que indicar antes del nombre 'archivo.txt' (ruta completa)

//throw: se utiliza poara lanzar una excepcion que es una forma de manejar errores o situaciones excepcionales
//en el codigo, cuando se usa el throw podemos detener la ejecucion normal del codigo y traferir el control a
//un block de codigo que maneje el error, normalmente es un bloque try catch