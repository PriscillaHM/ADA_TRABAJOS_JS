//Ejercicio 5: Servicio meteorológico
// El servicio meteorológico, para llevar el control diario de temperatura, 
// utiliza un objeto temperatura donde registra día —valor numérico del 
// día—, mes —valor numérico—, temperatura máxima y temperatura 
// mínima, correspondiente a dicho día. Las temperaturas —objeto 
// temperatura— están cargados en un array.
// a) Ordenar por temperatura mínima de menor a mayor.
// b) Ordenar por temperatura máxima de mayor a menor.

let listTemperaturas = [
    {dia: 10, mes: 9, temperaturaMaxima: 20, temperaturaMinima: 13},
    {dia: 11, mes: 9, temperaturaMaxima: 20, temperaturaMinima: 12},
    {dia: 12, mes: 9, temperaturaMaxima: 23, temperaturaMinima: 12},
    {dia: 13, mes: 9, temperaturaMaxima: 21, temperaturaMinima: 10},
    {dia: 14, mes: 9, temperaturaMaxima: 25, temperaturaMinima: 14},
];

// a) Ordenar por temperatura mínima de menor a mayor
let ordenarTemperaturaMinima = (array) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length- 1; j++) {
            if (array[j].temperaturaMinima > array[j + 1].temperaturaMinima) {
                let temporal = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temporal;
            }
        }
    }
    return array;
};
// b) Ordenar por temperatura máxima de mayor a menor.
let ordenarTemperaturaMaxima = (array) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length- 1; j++) {
            if (array[j].temperaturaMaxima < array[j + 1].temperaturaMaxima) {
                let temporal = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temporal;
            }
        }
    }
    return array;
};

console.log('Lista ordenada por temperatura mínima de menor a mayor:', ordenarTemperaturaMinima(listTemperaturas));
console.log('Lista ordenada por temperatura máxima de mayor a menor:', ordenarTemperaturaMaxima(listTemperaturas));