// Ejercicio 9: Funciones con retorno void y manipulación de objetos 
// Consigna: Crea un objeto llamado coche con las propiedades marca, modelo, y 
// encendido (booleano). Define una función encenderCoche que acepte el objeto 
// coche y cambie el valor de encendido a true. Muestra el estado del coche en la 
// consola antes y después de llamar a la función. 

let coche = {
    marca: 'Tesla',
    modelo: 'CyberTruck',
    encendido: false
}
console.log(`Objeto coche antes de llamar la funcion: ${coche.encendido}`)

const encenderCoche = (coche: {marca: string, modelo: string, encendido: boolean}) =>{
    return coche.encendido = true
}

console.log(`Objeto despues de llamar la funcion: ${encenderCoche(coche)}`)