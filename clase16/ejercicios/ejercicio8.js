//Ejercicio 8: Busca un nombre específico 
// Tienes una lista de nombres ['Carlos', 'Daniel', 'Laura', 'Ana']. Queremos 
// saber si el nombre 'Laura' está presente en la lista y, si lo está, deberías 
// devolverlo.
let nombre = ['Carlos', 'Daniel', 'Laura', 'Ana'];
let nombreEncoentrado = nombre.find((nombre) =>{
    return nombre == 'Laura';
});
console.log(nombreEncoentrado);