//Funcion comun declarada
// Funcion tradicional de js se define con la palabra reservada
// function, es un bloque de codigo que tiene funcionalidad
// y que va a reutulizar

function calcularAreaRectangulo(base, altura){
    return (base * altura);
}

console.log("Area del rectangulo:", calcularAreaRectangulo(3,4));

//Funcion declarada
//Tiene un nombre
function esPar(numero){
    if(numero % 2 === 0){
        return "Es par";
    } else{
        return "Es impar"
    }
}

console.log("El numero es", esPar(8));

//Funcion expresada
// se gurada en una variable 
const encotrarMayor = function (a, b){
    if(a > b){
        return a;
    } else {
        return b;
    }
}

console.log('El numero mayor es ', encotrarMayor(10,6));