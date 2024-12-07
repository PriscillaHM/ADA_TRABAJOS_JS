//EJERCICIO 2
//Determinar que dia de la semana es segun un numero

//Paso 1: Declarar variable con un numero que representa un dia de la semana
let diaNumero = 0;

//Paso 2: Usamos un switch para determinar el dia correspondiente
let diaNombre; //Varible para que guarde nombre del dia

switch (diaNumero){
    case 1: //si diaNumero es 1
        diaNombre = 'Lunes';
        break;
    case 2: //si diaNumero es 2
        diaNombre = 'Martes';
        break;
    case 3: //si diaNumero es 3
        diaNombre = 'Miercoles';
        break;
    case 4: //si diaNumero es 4
        diaNombre = 'Jueves';
        break;
    case 5: //si diaNumero es 5
        diaNombre = 'Viernes';
        break;
    case 6: //si diaNumero es 6
        diaNombre = 'Sabado';
        break;
    case 7: //si diaNumero es 7
        diaNombre = 'Domingo';
        break;
    default:  //Si diaNombre no es 1-7
        diaNombre = 'Numero invalido, debe ser un numero del 1 al 7';
}

console.log(diaNombre);