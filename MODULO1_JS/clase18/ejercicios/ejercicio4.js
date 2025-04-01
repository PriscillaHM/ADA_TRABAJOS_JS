// Ejercicio 4: Concurso de Likes
// En un concurso de fotografía, donde los usuarios publican una fotografía 
// y obtienen likes, se registra la cantidad de likes obtenidos por cada 
// usuario en un array. Ordenar los valores para poder indicar cuál fue la 
// mayor cantidad de likes obtenidos, cuánto obtuvo el segundo, cuánto el 
// tercero y cuánto el que menos likes obtuvo —suponer que participaron 15 
// usuarios y suponer para cada uno, una cantidad de likes—.

let likesPorUsuario = [159, 780, 189, 79, 100, 632, 235, 891, 270, 495, 205, 528, 691, 589, 99];

let ordenarLikes = (array) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length- 1; j++) {
            if (array[j] < array[j + 1]) {
                let temporal = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temporal;
            }
        }
    }
    return array;
};

let likesOrdenados = ordenarLikes(likesPorUsuario);

console.log('El primer lugar obtuvo: ', likesOrdenados[0]);
console.log('El segundo lugar obtuvo: ', likesOrdenados[1]);
console.log('El tercer lugar obtuvo: ', likesOrdenados[3]);
console.log('La menor cantidad de likes fue: ', likesOrdenados[14]);
