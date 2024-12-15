//Ejercicio 4: Calcular descuento por cantidad
// Solicita al usuario la cantidad de productos comprados y el precio unitario. 
// Usa una función flecha para calcular el total con descuento según la cantidad.

const prompt = require("prompt-sync")({ sigint: true});

let cantidadProductos = parseFloat(prompt('Ingrese la cantidad de produtos que compro: '));
let sumaPrecio = 0;

for(let i = 0; i < cantidadProductos; i++){
    let precioProducto = parseFloat(prompt('Ingrese el precio del producto ' + i+1 + ': '));
    sumaPrecio+= precioProducto;
}

let calcularDescuento = (cantidadProductos, sumaPrecio) =>{
    let total = sumaPrecio - (sumaPrecio * (cantidadProductos/100));
    return total;
}

console.log('Su total es: ' + calcularDescuento(cantidadProductos,sumaPrecio));