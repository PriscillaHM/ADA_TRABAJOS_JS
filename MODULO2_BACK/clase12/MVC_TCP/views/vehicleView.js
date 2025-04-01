//PASO 3 Creamos un obejto que contendra los metodos para formatear respuestas relacionadas con vehiculos
const VehicleView = {
    //Metodo para formater las respues que se enviaran al usuario
    formatResponse: (vehicle) => {
        //verificamos si elk vehiculo es null o undefined
        if(!vehicle){
            //Si no se encontro el vehiculo devolvemos un obj json con un mensaje de error
            return JSON.stringify({
                status: "error", //indicacion de que hubo error
                messege: "Vehiculo no encontrado" //Mensaje descriptivo
            })
        }

        //Si no se encontro el vehiculo, devolvemos un obj json con los datos del vehiculo
        return JSON.stringify({
            status: "success", //Indicamos que fue exitoso
            data: vehicle //incluis los datos del vehiculo
        })
    }
}

module.exports = VehicleView