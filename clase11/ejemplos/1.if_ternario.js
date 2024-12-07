//EJEMPLO 1
//Verificar si una persona es mayor de edad

//Paso 1: Declarar variable de edad 
let edad = 17;

//Paso 2: Usamos el operador ternario para determinar si es mayor de edad
let mensaje = edad >= 18 ? 'Mayor de edad' : 'Menor de edad';
//La condicion es: Edad es mayor o igual a 18?
//Si es verdadera, el resultado sera Mayor de edad
//Si es falso, el resultado sera Menor de edad

//Paso 3: Mostrar mensaje
console.log(mensaje);

//Explicacion:
//El oeprador tenario funciona como in if pero en una sola linea 
//Estructura: condicion ? valor_si_verdadero : valor_si_falso
//En este caso:
// - condicion: edad >= 18
// - valor_si_verdadero: Mayor de edad
// - valor_si_falso: Menor de edad