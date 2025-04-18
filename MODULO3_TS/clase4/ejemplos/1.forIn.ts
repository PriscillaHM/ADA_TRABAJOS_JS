//Ejemplo basico con un objeto
let alumna = {
    nombre: 'Lucia',
    edad: 22,
    curso: 'Programacion'
}

//Itera sobre las propiedades del objeto alumna. Se imprimen las claves y los valores correspondientes.
//keyof typeof: con esto estamos queriendo decir que la variable propiedas es una clave valida para el objetp alumna
for (let propiedad in alumna){
    console.log(`Clave: ${propiedad}, Valor: ${alumna[propiedad as keyof typeof alumna]}`)
}

//Ejemplo de for in en arrays
let leguajes = ['JS', 'Python', 'TS']
for(let lengauje in leguajes) {
    console.log(`Ejemplo array: ${lengauje}`)
}
