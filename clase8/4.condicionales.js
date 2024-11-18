//CONDICIONALES

let calificacion1 = 100;
let calificacion2 = 70;
let calificacion3 = 100;
let calificacion4 = 100;
let calificacion5 = 100;
let calificacion6 = 100;

let promedio = (calificacion1 + calificacion2 + calificacion3 + calificacion4 + calificacion5 + calificacion6) / 6;
console.log(promedio)

if (promedio < 60){
    console.log('Reprobado')
} else if (promedio >= 60 && promedio<= 89){
    console.log('aprobado');
} else {
    console.log('Aprobado con excelencia')
}