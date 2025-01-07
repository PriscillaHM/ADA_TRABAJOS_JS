//Ejemplo Scope global y local

//Varibale con scope global
//las variables definidas fuera de cualquier funcion son accesibles
//en todo el programa
let mensajeGlobal = 'Estoy en el Scope global'

function mostrarMensaje(){
    //Variable scope local
    //las variables definidas dentro de la funcion solo existen
    //dentro de esa funcion
    let mensajeLocal = 'Estoy en el scope local'
    console.log(mensajeGlobal);
    console.log(mensajeLocal);
}

mostrarMensaje();
// console.log(mensajeLocal) no es posible hacer esto ya que es una variable local de la funcion mostrarMensaje