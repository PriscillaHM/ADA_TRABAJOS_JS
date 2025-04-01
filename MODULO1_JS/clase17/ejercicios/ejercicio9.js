//Ejercicio 9: Desafío extra! Orden, lugar y números

let list = [12, 3, 5, 7, 1, 22, 47, 100];

let bubbleSort = (array) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length- 1; j++) {
            if (array[j] > array[j + 1]) {
                let temporal = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temporal;
            }
        }
    }
    return array;
}

let listaOrdenada = bubbleSort(list);
console.log('Lista ordenada:', listaOrdenada);

function busquedaBinaria(array, objetivo) {
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

const numeros2 = [12, 5, 22, 100];
numeros2.forEach(num => {
    console.log(`La posición del número ${num} es: ${busquedaBinaria(listaOrdenada, num)}`);
});