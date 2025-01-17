//Ejercicio 4: Transformación y Análisis de Cadenas
const prompt = require("prompt-sync")({ sigint: true});

let nombresUsuario = prompt('Ingrese una lista de nombres separados por comas: ');

let transformarYAnalizarNombres = (nombresUsuario) =>{
    let nombresSinEspacios = nombresUsuario.split(',').map(nombre => nombre.trim());

    let existeJuan = nombresSinEspacios.includes('Juan');

    let nombresModificados = nombresSinEspacios.map(nombre => nombre === "María" ? "Ana" : nombre);
    let indiceNombre = nombresSinEspacios.indexOf('Pedro');

    let ordenAlfabetico = nombresModificados.sort();
    let nombresSeparados = ordenAlfabetico.join('.');

    return {
        nombres: nombresModificados,
        existeJuan,
        indiceNombre,
        nombresSeparados
    }
}

console.log(transformarYAnalizarNombres(nombresUsuario));