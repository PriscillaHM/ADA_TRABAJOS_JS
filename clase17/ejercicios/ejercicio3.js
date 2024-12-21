// Ejercicio 3: Gestión Compleja de Arrays
let productos = [
    {nombre: 'Alfajores', precio: 30},
    {nombre: 'Chocolates', precio: 50},
    {nombre: 'Chupetines', precio: 70},
    {nombre: 'Caramelo', precio: 20},
    {nombre: 'Bombones', precio: 20},
]

let gestionarProdutos = (productos) =>{
    let nuevoProducto = {nombre: 'Picafresa', precio: 5};
    productos.push(nuevoProducto);

    productos.pop();

    let productoEspecifico = 'Chupetines';
    let indiceProducto = -1
    productos.forEach((producto, index) => {
        if(producto.nombre == productoEspecifico){
            indiceProducto = index;
        }
    });

    let productoMayor50 = productos.some(producto => producto.precio > 50);

    let nombresSeparados = productos.map(producto => producto.nombre).join(', ');

    return {
        productos,
        indiceProducto,
        productoMayor50,
        nombresSeparados
    }
};

console.log(gestionarProdutos(productos))