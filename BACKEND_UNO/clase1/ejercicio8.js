// Ejercicio 8: Contador de letras 
// Crea una función que reciba una cadena de texto y una letra, y devuelva 
// cuántas veces aparece esa letra en la cadena.
let texto = 'Programar es divertido';

let contarLetra = (texto, letra) =>{
    let contador = 0;

    for(let i = 0; i < texto.length; i++){
        if(letra.includes(texto[i])){
            contador++;
        }
    }
    return contador;
}

console.log(contarLetra(texto, 'r'));