//Ejercicio 7: Verificar si una lista contiene un elemento 
// Tienes una lista de comidas ["Pizza", "Hamburguesa", "Tacos"]. Verifica si 
// "Sushi" está en la lista y muestra un mensaje que confirme si está o no.
let comidas = ['Pizza', 'Hamburguesa', 'Tacos'];
console.log('Array inicial: ',comidas);

let comidaEncontrada = comidas.includes('Sushi');
if(comidaEncontrada == true){
    console.log('La comida sushi esta en el array: ', comidaEncontrada);
} else{
    console.log('La comida sushi  no esta en el array: ', comidaEncontrada);
}