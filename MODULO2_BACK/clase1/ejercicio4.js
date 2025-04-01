// Ejercicio 4: Contando vocales 
// Crea una función que reciba una cadena de texto y devuelva cuántas 
// vocales contiene.
let texto = 'Hola mundo';

let contarVocales = () =>{
    let contador = 0;
    let vocales = 'aeiouAEIOU';

    for(let i = 0; i < texto.length; i++){
        if(vocales.includes(texto[i])){
            contador++;
        }
    }
    return contador;
}

console.log(contarVocales(texto));