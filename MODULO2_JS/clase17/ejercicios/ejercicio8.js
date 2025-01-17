//Ejercicio 8: Lugar y números
// ejercicio1.js
const lista = [1, 3, 5, 6, 9, 11];

let busquedaBinaria = (array, objetivo) => {
    let inicio = 0;
    let fin = array.length - 1;

    while (inicio <= fin) {
        let medio = Math.floor((inicio + fin) / 2);

        if (array[medio] === objetivo) {
            return medio;
        } else if (array[medio] < objetivo) {
            inicio = medio + 1;
        } else {
            fin = medio - 1;
        }
    }
    return -1;
}

let numeros = [1, 5, 6, 9, 11];
numeros.forEach(num => {
    console.log(`La posición del número ${num} es: ${busquedaBinaria(lista, num)}`);
});
