// Ejercicio 1: Declarar y usar funciones con tipos 
// Consigna: Crea una función llamada multiplicarNumeros que acepte dos 
// parámetros, ambos de tipo number, y retorne el producto de ambos números. 
// Luego, muestra el resultado en consola llamando a la función. 

const multiplicarNumeros = (numero1: number, numero2: number): number =>{
    return numero1 * numero2
}
console.log(`El resultado de la multiplicacion es: ${multiplicarNumeros(2,5)}`)