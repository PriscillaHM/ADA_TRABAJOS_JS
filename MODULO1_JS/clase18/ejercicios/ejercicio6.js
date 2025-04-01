// Ejercicio 6: Ordenando personas
let personas = [
    {
        nombre: 'Dua',
        apellido: 'Lipa',
        ocupacion: 'cantante',
        estatura: 173
    },
    {
        nombre: 'Ariana',
        apellido: 'Grande',
        ocupacion: 'cantante',
        estatura: 160
    },
    {
        nombre: 'Taylor',
        apellido: 'Swift',
        ocupacion: 'cantante',
        estatura: 180
    },
];

//Ordenas por estaura de menor a mayor
let ordenarEstatura = (array) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length- 1; j++) {
            if (array[j].estatura > array[j + 1].estatura) {
                let temporal = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temporal;
            }
        }
    }
    return array;
};

console.log('Lista ordenada por estauras de menor a mayor: ', ordenarEstatura(personas));