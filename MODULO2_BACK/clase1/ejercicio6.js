// Ejercicio 6: Calculadora de promedio 
// Escribe una función que reciba un array de números y devuelva el 
// promedio.
let calificaciones = [8, 9, 10, 7, 6];


let calcularPromedio = () =>{
    let suma = 0;
    for(let i = 0; i < calificaciones.length; i++){
        suma = suma + calificaciones[i];
    }
    let promedio = suma/ calificaciones.length;
    return promedio;
}
 console.log(calcularPromedio(calificaciones));