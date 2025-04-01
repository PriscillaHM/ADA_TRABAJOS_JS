// Ejercicio 3: Ordenando números 
// Crea una función que reciba un array de números y devuelva un nuevo 
// array con los números ordenados de menor a mayor.
let numeros = [5, 2, 9, 1, 7];

let list = [12, 3, 5, 7, 1, 22, 47, 100];

let ordenarNumeros = (numeros) => {
    for (let i = 0; i < numeros.length; i++) {
        for (let j = 0; j < numeros.length- 1; j++) {
            if (numeros[j] > numeros[j + 1]) {
                let temporal = numeros[j];
                numeros[j] = numeros[j + 1];
                numeros[j + 1] = temporal;
            }
        }
    }
    return numeros;
}

let numerosOrdenados = ordenarNumeros(numeros);
console.log('Lista ordenada:', numerosOrdenados);