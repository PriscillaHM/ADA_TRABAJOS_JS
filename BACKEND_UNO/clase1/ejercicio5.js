// Ejercicio 5: Generador de iniciales 
// Escribe una función que reciba un nombre completo y devuelva las 
// iniciales en mayúsculas.

let nombre = 'juan perez gomez';
let iniciales;
let generarIniciales = (nombre) =>{
    let nombreSeparado = nombre.split();

    for(let i = 0; i < nombreSeparado.length; i++){
        iniciales = nombreSeparado[0][i];
    }
    return iniciales;
}

console.log(generarIniciales(nombre));