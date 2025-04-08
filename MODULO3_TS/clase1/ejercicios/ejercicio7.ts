// Ejercicio 7: Tipos literales 
// Usa un tipo literal para declarar una variable que solo acepte uno de los valores: 
// "Lunes", "Martes", "Miércoles". Intenta asignar otros valores y observa el error en 
// TypeScript. 

type dias = 'Lunes' | 'Martes' | 'Miercoles'
let dia: dias = 'Lunes'
console.log(dia)