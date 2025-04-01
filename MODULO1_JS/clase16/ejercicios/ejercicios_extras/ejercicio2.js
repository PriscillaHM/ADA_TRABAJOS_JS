// Calcula el total de ventas de productos seleccionados
// Supón que tienes una lista de productos con sus precios en formato de 
// objeto: 
// const products = [
//  { name: 'Laptop', price: 1000 },
//  { name: 'Mouse', price: 25 },
//  { name: 'Teclado', price: 50 },
//  { name: 'Monitor', price: 200 },
//  { name: 'Audífonos', price: 75 }];
// Queremos:
// o Seleccionar los productos cuyo precio sea mayor o igual a 50.
// o Obtener solo los nombres de esos productos.
// o Calcular el precio total sumando los precios de los productos 
// seleccionados.
// o Imprime el total y los nombres de los productos seleccionados en la 
// consola.
const products = [
    { name: 'Laptop', price: 1000 },
    { name: 'Mouse', price: 25 },
    { name: 'Teclado', price: 50 },
    { name: 'Monitor', price: 200 },
    { name: 'Audífonos', price: 75 }
];

//Seleccionar los productos cuyo precio sea mayor o igual a 50
let precioMayor50 = products.filter((producto) =>{
    return producto.price >= 50;
});
console.log('Productos con precios mayores o iguales a 50: ', precioMayor50);

// Obtener solo los nombres de esos productos.
let nombreProducto = precioMayor50.map((producto) =>{
    return producto.name;
});
console.log('Nombre de los productos seleccionados: ' + nombreProducto);

// Calcular el precio total sumando los precios de los productos 
// seleccionados.
let total = precioMayor50.reduce((acum, producto) =>{
    return acum + producto.price;
}, 0);
console.log('El precio total de los productos es: ' + total);