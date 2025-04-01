//PASO 4 Importar modulo del modelo
//Este modulo contiene la logica para obtener los datos de los vehiculos
const VehicleModel = require('../models/vehicleModel')

//PASO 5 Importamos el modulo de la vista
//este modulo contiene la logica para formatear la respuesta que se enviara al usuario
const VehicleView = require('../views/vehicleView')

//Creamos un objeto que manejara las solicitudes relacionadas con vehiculos
const VehicleController = {
    //Metodo para manejar solitudes de vehivulo por id
    handleRequest: (id) => {
        //Llamamos al metodo getVehicleByIs del modelo para obtener los datos del vehivulo
        //Convertimos el id a un numero id usando parseint bese 10 
        const vehicle = VehicleModel.getVehicleById(parseInt(id,10))

        //Llamamos al metodo formatResponse del view
        //este metodo toma los datos de vehiculo y los prepara para ser enviados al usuario
        return VehicleView.formatResponse(vehicle)
    }
}

//Exportamos el objeto
module.exports = VehicleController
