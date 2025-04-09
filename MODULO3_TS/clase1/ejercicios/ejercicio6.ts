// Ejercicio 6: Uso de unknown 
// Declara una variable de tipo unknown. Asigna diferentes tipos de valores a esta 
// variable, y utiliza el operador typeof para verificar el tipo antes de imprimir los 
// valores. 

let unknown: unknown 

unknown = 'Hola mundo'
if(typeof unknown === 'string'){
    console.log('Es un string: ',unknown)
}

unknown = 42
if(typeof unknown === 'number'){
    console.log('Es un number: ',unknown)
}
unknown = true;
if (typeof unknown === "boolean") {
  console.log("Es un booleano:", unknown);
}