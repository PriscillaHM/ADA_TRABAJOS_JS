//Ejercicio 10: Factorial de un número (Ejercicio entrevista)
let factorial = 1;

let calcularFactorial = function(numero){
    for(let i = 1; i <= numero; i++){
        factorial *= i;
    }
    return factorial;
}

console.log('El factorial es ', calcularFactorial(5));