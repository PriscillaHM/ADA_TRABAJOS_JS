//Ejercicio 6: Autos y más autos…
let entrada = 'Toyota, Honda, Ford, Chevrolet, Nissan';

let gestionarAutos = (entrada) => {
    let autos = entrada.split(', ');

    let tieneTesla = autos.includes("Tesla");
    if (tieneTesla) {
        console.log("La lista contiene la marca 'Tesla'.");
    } else {
        console.log("La lista no contiene la marca 'Tesla'.");
    }

    let autosRemplazo = autos.map(auto => auto === 'Ford' ? 'BMW' : auto);

    let indiceChevrolet = autosRemplazo.indexOf("Chevrolet");
    if (indiceChevrolet !== -1) {
        console.log(`El índice de la marca 'Chevrolet' es: ${indiceChevrolet}`);
    } else {
        console.log("La marca 'Chevrolet' no está en la lista.");
    }

    let autosOrdenados = autosRemplazo.sort().join('.');

    return autosOrdenados
}

console.log(gestionarAutos(entrada));