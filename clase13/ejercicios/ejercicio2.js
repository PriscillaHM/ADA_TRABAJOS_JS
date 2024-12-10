//Ejercicio 2: Número mayor (función expresada)

const encotrarMayor = function (a, b){
    if(a > b){
        return a;
    } else {
        return b;
    }
}

console.log('El numero mayor es ', encotrarMayor(10,6));