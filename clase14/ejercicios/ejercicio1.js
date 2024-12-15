//Ejercicio 1: Calcular el precio final con IVA
// Solicita al usuario el precio de un producto y el porcentaje de IVA. Usa una 
// función flecha para calcular el precio final.

const prompt = require("prompt-sync")({ sigint: true});

let precioProducto = parseFloat(prompt('Ingrese el precio del producto: '));
let ivaProducto= parseFloat(prompt('Ingrese el procentaje de IVA del producto: '));

let calcularIva = (precioProducto, ivaProducto) => {
    return precioProducto + (precioProducto * (ivaProducto/100));
}

console.log(calcularIva(precioProducto, ivaProducto));