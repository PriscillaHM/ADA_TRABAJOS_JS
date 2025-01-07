//Ejercicio 7: “La Floreria”
let entrada = 'Rosa, Tulipan, Orquideas, Lirio';

let gestionarFloreria = (entrada) => {
    let flores = entrada. split(', ');
    
    let existeMargarita = flores.includes('Margarita');
    if(existeMargarita){
        console.log('La lista contiene la flor Margarita');
        flores.push('Azucena')
    } else {
        console.log('La lista no contiene la flor Margarita');
    }

    let floresModificadas = flores.map(flor => flor == 'Orquideas' ? 'Clavel' : flor);

    let indiceGirasol = floresModificadas.indexOf('Girasol');
    if (indiceGirasol == -1){
        floresModificadas.unshift('Girasol');
    } 

    let floresOrdenadas = floresModificadas.sort().join('.');

    return floresOrdenadas;
}

console.log(gestionarFloreria(entrada));