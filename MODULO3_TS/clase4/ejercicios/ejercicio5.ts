// Actividad 5: Usar aserciones dobles 
// Crea una variable de tipo any y haz una conversión con aserciones dobles para 
// convertirla en un number. Muestra el resultado.
export let valorAny: any = 'Este es un valor any'
let valorNumerico = (valorAny as unknown as number)
console.log(`Valor numerico con asercion doble: ${valorNumerico}`)