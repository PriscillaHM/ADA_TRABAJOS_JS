//Ejercicio 7: Mensaje según la hora
let horaActual = 19;

function mostrarSaludo(){
    if(horaActual < 12){
        return 'Buenos dias';
    } else if(horaActual >= 12 && horaActual < 18){
        return 'Buenas tardes';
    } else {
        return 'Buenas noches';
    }
}

console.log(mostrarSaludo());