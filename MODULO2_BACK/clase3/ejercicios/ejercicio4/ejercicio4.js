// Actividad 4: Control de inventario
// Consigna: Crea un programa para llevar el control de un inventario. El 
// programa debe permitirte:
// 1. Agregar un producto: Registrar un producto con su nombre y 
// cantidad disponible.
// 2. Listar los productos: Mostrar todos los productos registrados.
// 3. Actualizar la cantidad de un producto: Modificar la cantidad de 
// un producto en el inventario.

//PASO 1 Importacion
const fs = require('fs');
const filePath = './productos.json';

//PASO 2 Funcion para leer series
const leerProductos = () =>{
    if(!fs.existsSync(filePath)){
        fs.writeFileSync(filePath, '[]')
    }
    const contenido = fs.readFileSync(filePath, 'utf-8')//leemos el archivo 
    return JSON.parse(contenido)
}

//PASO 3 Funcion para escribir en el archivo json
const escribirProdutos = (productos) =>{
    fs.writeFileSync(filePath, JSON.stringify(productos, null,2))
}

//PASO 4 Agregar una serie
const agregarProducto = (nombreProducto, cantidad) =>{
    const productos = leerProductos()
    productos.push({id: productos.length + 1, nombre: nombreProducto, cantidad: cantidad})
    escribirProdutos(productos)
    console.log('Producto agregado correctamente: ', nombreProducto)
}

//PASO 5  Listar libros
const listarProducto = () =>{
    const productos = leerProductos()
    console.log('Lista de productos: ')
    productos.forEach(producto =>{
        console.log(`${producto.id}. ${producto.nombre} Cantidad: ${producto.cantidad}`)
    })
}

//PASO 6 Actualizar las temporadas de una serie
const actualizarCantidad = (id, cantidadActualizada) =>{
    const productos = leerProductos()
    const producto =  productos.find((t) => t.id === parseInt(id))
    if(producto){
        producto.cantidad = cantidadActualizada
        escribirProdutos(productos)
        console.log('Producto actualizado: ', producto.nombre, 'Cantidad: ', producto.cantidad)
    } else{
        console.log('Producto no encontrado')
    }
}

// agregarProducto("Laptop", 3)
// agregarProducto("Monitor", 4)
listarProducto()
actualizarCantidad(1,5)
listarProducto()