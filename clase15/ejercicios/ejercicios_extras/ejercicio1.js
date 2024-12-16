// Gestión de inventario de una tienda 
// Eres encargado de una tienda y tienes un inventario inicial de productos. 
// La lista de productos es:
// let inventario = ["Laptop", "Teclado", "Mouse", "Monitor"];
// Debes realizar las siguientes acciones:
// 1. Agregar un nuevo producto "Impresora" al inventario usando el 
// método adecuado.
// 2. Comprobar si "Tablet" está en el inventario y mostrar un mensaje 
// adecuado.
// 3. Eliminar el primer producto del inventario.
// 4. Mostrar la lista actualizada de productos en una sola cadena, 
// separados por comas.

let inventario = ["Laptop", "Teclado", "Mouse", "Monitor"];
console.log('El inventario inicial es: ', inventario);

// 1. Agregar un nuevo producto "Impresora" al inventario usando el 
// método adecuado.
inventario.push('Impresora');
console.log('Inventario modificado: ',inventario);

// 2. Comprobar si "Tablet" está en el inventario y mostrar un mensaje 
// adecuado.
let encontrarProducto = inventario.includes('Tablet');
if(encontrarProducto == true){
    console.log('El producto tablet se encuentra en el inventario');
} else {
    console.log('El producto tables no se encuentra en el inventario')
}

// 3. Eliminar el primer producto del inventario.
inventario.shift();
console.log('Inventario modificado (salida de producto): ',inventario);

// 4. Mostrar la lista actualizada de productos en una sola cadena, 
// separados por comas.
let inventarioActualizado = inventario.join(',');
console.log('Inventario actualizado: ', inventarioActualizado);