// Actividad 4: Usar aserciones de tipo 
// Declara una variable de tipo any y usa una aserción para tratarla como string, 
// accediendo a la propiedad .length.

let valorAny: any = 'TypeScript es increible'
let longitudAny: number = (valorAny as string).length
console.log(longitudAny)