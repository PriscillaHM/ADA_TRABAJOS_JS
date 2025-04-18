// Actividad 1: Usar For...In para recorrer propiedades de un objeto 
// Crea un objeto con al menos 3 propiedades (nombre, edad, ciudad) y usa un 
// bucle for...in para recorrer y mostrar cada propiedad y su valor.
const persona = {
    nombre: 'Lucia',
    edad: 25,
    ciudad: 'Ensenada'
}

for(let propiedad in persona){
    console.log(`Clave: ${propiedad}, Valor: ${persona[propiedad as keyof typeof persona]}`)
}