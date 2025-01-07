// Encuentra la película más corta y analiza los títulos largos
// Supón que tienes una lista de películas con su duración en minutos: 
// const movies = [
//  { title: 'El Señor de los Anillos', duration: 200 },
//  { title: 'Inception', duration: 148 },
//  { title: 'Matrix', duration: 136 },
//  { title: 'Toy Story', duration: 81 },
//  { title: 'Coco', duration: 105 }];
// Queremos:
// o Encontrar la película más corta en duración.
// o De las películas restantes, quedarnos con aquellas cuyo título tenga más de 10 caracteres.
// o Crear una lista de los títulos largos en minúsculas.
// o Imprime en la consola: El título de la película más corta. La lista de títulos largos en minúsculas
const movies = [
    { title: 'El Señor de los Anillos', duration: 200 },
    { title: 'Inception', duration: 148 },
    { title: 'Matrix', duration: 136 },
    { title: 'Toy Story', duration: 81 },
    { title: 'Coco', duration: 105 }
];

// Encontrar la película más corta en duración.
let temporal = 0;
let menorDuracion = 250;
let peliculaCorta = movies.reduce((duracionCorta, pelicula) =>{
    return pelicula.duration < duracionCorta.duration ? pelicula : duracionCorta;
});
   
// De las películas restantes, quedarnos con aquellas cuyo título tenga 
// más de 10 caracteres.
// Crear una lista de los títulos largos en minúsculas
let duracionMayor = movies.filter((pelicula) =>{
    return pelicula.duration > peliculaCorta.duration;
});
console.log(duracionMayor)

let tituloLargo = duracionMayor.filter((pelicula) =>{
    return pelicula.title.length > 10

});

let tituloMinusculas = tituloLargo.map((pelicula) =>{
    return pelicula.title.toLocaleLowerCase();
});

// Imprime en la consola:
// o El título de la película más corta.
// o La lista de títulos largos en minúsculas
console.log('El titulo de la pelicula mas corta es: ', peliculaCorta.title);
console.log('La lista de titulos largos en minusculas: ', tituloMinusculas);