let notas = [10, 4, 5, 8, 9, 2, 7];

// 1. Metodo map: Crea un nuevo array con los resultados de la funcion aplicada a cada elemento
let notasHastCien = notas.map((numero) => {
    return numero * 10;
});
console.log('Ejemplo de map: ' + notasHastCien);

// 2. Metodo filter: Crea un nuevo arreglo con los elementos que pasan la condicion
//especificada en la funcion
let notasAprobadas = notas.filter((numero) =>{
    return numero >= 7;
});
console.log('Ejemplo de filter: ' + notasAprobadas);

// 3. Metodo reduce: Reduce a un valor unico un array
let sumaDeNotas = notas.reduce((acum,numero) =>{
    return acum + numero;
});
console.log('Ejemplo de reduce: ' + sumaDeNotas);

// 4. Metodo forEach: Ietara sobre un array y no retorna nada
notas.forEach((valor, indice) => {
    console.log('En la posicion ' + indice + ' Esta el valor ' + valor);
});

// 5. Metodo find: Encuentra el primer elementos en el array que cumple con 
//la condicion
let notasEncontradas = notas.find((numero) =>{
    return numero >= 8;
});
console.log('La primera nota mayor o igual a 8 es: ' + notasEncontradas);