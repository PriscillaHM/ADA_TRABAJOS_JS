// Ejercicio 3: Creación y manipulación de objetos 
// Consigna: Crea un objeto llamado deportista que tenga las propiedades nombre 
// (string), deporte (string), y energia (number). Luego, define una función entrenar 
// que acepte el objeto deportista y un número de horas de entrenamiento, 
// disminuyendo la energía del deportista en 5 por cada hora de entrenamiento. Al 
// final, muestra el estado del deportista en la consola. 

let deportista: {nombre: string, deporte: string, energia: number} = {
    nombre: 'Priscilla',
    deporte: 'Tenis', 
    energia: 100
}

let entrenar = (deportista: {nombre: string, deporte: string, energia: number}, entrenamiento: number) => {
    let disminucion = entrenamiento * 5
    let nuevaEnergia = deportista.energia - disminucion
    deportista = {
        nombre: 'Priscilla',
        deporte: 'Tenis', 
        energia: nuevaEnergia
    }
    return deportista
}
console.log(entrenar(deportista,2))