// Ejercicio 5: Datos nulos y diferenciados 
// Declara una variable de tipo string | null. Asigna inicialmente un valor de cadena, 
// y luego cambia su valor a null. Imprime ambos estados en la consola, explicando 
// el significado de null en TypeScript. 

export let saludo: string | null = 'Hola'
console.log(`El valor de la variable saludo es ${saludo}`)
saludo = null
console.log(`Ahora el valor de la variable saludo es ${saludo}. Esto significa que la variable esta vacia.`)