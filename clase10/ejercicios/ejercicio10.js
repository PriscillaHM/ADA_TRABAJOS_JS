const prompt = require("prompt-sync")({ sigint: true});
//Ejercicio 10 - Cálculo de Descuento: 
// Escribe un programa que calcule el precio final de un producto después 
// de aplicar un descuento. Pide al usuario que ingrese el precio original 
// y el porcentaje de descuento, y muestra el precio final.

let precioOrginal = parseFloat(prompt('Ingrese el precio del producto: '));
let porcentajeDescuento = parseFloat(prompt('Ingrese el % de descuento: '));
let montoDescuento = precioOrginal * (porcentajeDescuento / 100);
let precioFinal = precioOrginal - montoDescuento;
console.log(`El precio final del producto es ${precioFinal} pesos`);