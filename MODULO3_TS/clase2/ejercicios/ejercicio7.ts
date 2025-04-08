// Ejercicio 7: Función que modifica propiedades de un objeto 
// Consigna: Crea una función llamada aumentarSalario que acepte un objeto 
// empleado con las propiedades nombre (string) y salario (number), y un número 
// que represente el porcentaje de aumento. La función debe aumentar el salario 
// del empleado y devolver el nuevo salario. Muestra en la consola el resultado. 
const aumentarSalario = (nombre: string, salario:number, aumento: number) => {
    return salario + (salario * (aumento / 100))
    
}
console.log(`El nuevo saladrio del empleado es: ${aumentarSalario('Juan', 2500, 15)}`)