// Ejercicio 5: Función con parámetros rest 
// Consigna: Crea una función llamada sumarTodos que acepte una cantidad 
// indefinida de números y devuelva su suma. Luego, llama a la función con varios 
// números y muestra el resultado en la consola

function sumarTodos(...number: number[]): number {
    return numeros.reduce((total, num) => total + num,0)
}

console.log(sumarTodos(3,4,6,8,2))