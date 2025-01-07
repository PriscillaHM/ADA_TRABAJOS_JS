// Ejercicio 7: Matriz 5x5 
// Declara una variable que contenga una matriz de 5x5 llena de puros 
// números enteros y positivos. Luego, escribe un algoritmo para sumar 
// todos los números en la matriz.

let matriz = [
    [10,3,2,1,4],
    [5,5,10,100,5],
    [5,125,10,1020,4],
    [5,5,5097,100,4],
    [5,5,5,5,5]
];
 
let suma = 0;

for(let i = 0; i < matriz.length; i++){
    for(let j = 0; j < matriz[i].length; j++){
        suma = parseFloat(matriz[i][j]) + suma;
    }
}

console.log(suma);