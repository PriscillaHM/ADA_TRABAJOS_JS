//PASO 1 Importa modulos necesarios
//fs file system para trabajar con el tema de archivos
//path nos ayuda a manejar las rutas de archivos
const fs = require('fs')
const path = require('path')

//PASO 2 Definimos la ruta del archivo 'data.json' que esta en el mismo directorio que este archivo
//__dirname es una variable global que contiene la ruta del directorio actual
const dataPath = path.join(__dirname, 'data.json')

//PASO 3 Creamos un objeto que conrendra metodos para interactuar con los datos de los vehiculos
const VehicleModel = {
    //Metodo para obtener un vehiculo por id
    getVehicleById: (id) =>{
        //Leemos el archivo json de manera sincrona
        const rawData = fs.readFileSync(dataPath)

        //Convertir el contenido del archivo de json a js
        const vehicles = JSON.parse(rawData)

        //Buscamos el vehiculo cuyo id coincida con el id proporcionado
        //si no se encuentra ningun vehiculo con ese id retorna null
        return vehicles.find(vehicle => vehicle.id === id || null)

    }
}

//Exportamos el objeto vehicleModel para que pueda ser utilizado en otros archivos
module.exports = VehicleModel