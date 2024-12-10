//Ejercicio 4: Número par o impar

function esPar(numero){
    if(numero % 2 === 0){
        return "Es par";
    } else{
        return "Es impar"
    }
}

console.log('El numero ', esPar(8));