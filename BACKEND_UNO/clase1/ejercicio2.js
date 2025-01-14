// Ejercicio 2: El menú del día
// Escribe una función que reciba un objeto con platos y precios, y devuelva 
// los platos cuyo precio sea menor a $20.

let menu = {
    "Ensalada": 15,
    "Sopa": 8,
    "Carne": 25,
    "Pasta": 18,
};

let platillos = [];

let platosBaratos = (menu) =>{
    for(let plato in menu){
        if(menu[plato] < 20){
            platillos.push(plato);
        }
    }
    console.log(platillos);
}

platosBaratos(menu);