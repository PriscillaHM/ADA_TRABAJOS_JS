//EJERCICIO 3
//Programa que simula ser un lorito, Repite lo que oye 5 veces

//Paso 1: Importar modulo promp-sync
const prompt = require("prompt-sync")({ sigint: true});

//Paso 2: Solicitamos al usuario que ingrese el texto
let texto = prompt('Ingrese el texto que quiere que el loro repita: ');

//Paso 3: Usamos el ciclo for para repetir el texto 5 veces
//Estructura del ciclo:
// - Inicializacion: let i = 0 (inicializa el contador en 0)
// - Condicion: i < 5 (el ciclo continua mientras que i sea menor a 5)
// - Incremento: i++ (suma 1 al contador i en cada iteracion)
for(let i = 0; i < 5; i++){
    console.log(`Repeticion ${i + 1} : ${texto}`);
}