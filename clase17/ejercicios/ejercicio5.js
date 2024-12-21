//Ejercicio 5: Manipulación de Arrays y Cadena
let frases = [
    'El clima es MALO hoy',
    'Este libro es muy MALO',
    'El servicio aqui es MALO'
];

let procesarFrases = (frases) =>{
    let frasesModificadas = frases.map(frases => {
        let frasesMinusculas = frases.toLowerCase();
        
        let palabras = frasesMinusculas.split(' ');

        let palabrasModificadas = palabras.map(palabra => palabra === 'malo' ? 'bueno' : palabra);

        let palabrasCombinadas = palabrasModificadas.join(' ');

        return palabrasCombinadas;
    });

    return frasesModificadas;
}

console.log(procesarFrases(frases));