//Ejercicio 10: Flores Favoritas
// Escribe un programa en JavaScript para contar cuántas veces el usuario 
// menciona sus flores favoritas. Realiza las siguientes acciones:
// 1. Inicializa un array vacío para almacenar las flores favoritas.
// 2. Pregunta al usuario por sus tres flores favoritas utilizando prompt y 
// agrega cada una al array manualmente (sin usar métodos como push).
// 3. Pregunta al usuario por una flor específica y verifica si está entre sus 
// favoritas.
// 4. Muestra por consola cuántas de las flores favoritas se mencionaron (esto 
// debe hacerse manualmente).
const prompt = require("prompt-sync")({ sigint: true});

let floresFavoritas = []

let florFavoritaUsuario1 = prompt('Ingrese su flor favorita: ');
floresFavoritas[0] = florFavoritaUsuario1

let florFavoritaUsuario2 = prompt('Ingrese su segunda flor favorita: ');
floresFavoritas[1] = florFavoritaUsuario2;

let florFavoritaUsuario3 = prompt('Ingrese su tercera flor favorita: ');
floresFavoritas[2] = florFavoritaUsuario3;

let preguntarFlor = prompt('Ingrese un tipo de flor espeficico: ');
let contador = 0;

for(let i = 0; i < floresFavoritas.length; i++){
    if(floresFavoritas[i] == preguntarFlor){
        contador++
    }
}

if(contador > 0){
    console.log(`La flor ${preguntarFlor} aparece en el array ${contador} vez`);
} else{
    console.log(`La flor ${preguntarFlor} no aparece en el array`);
}
