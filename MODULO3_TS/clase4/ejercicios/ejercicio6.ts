// Actividad 6: Filtrar elementos de un arreglo genérico usando For...Of y 
// Aserciones 
// Crea una función genérica llamada filtrarElementos que reciba un arreglo de 
// valores mixtos (por ejemplo, number | string | boolean). Usando un bucle for...of, 
// filtra solo los valores que sean cadenas de texto (string). Utiliza aserciones de 
// tipo para acceder a las propiedades específicas de string. 

function filtrarElementos<T>(arreglo: T[]): string[]{
    let resultado: string[] = []

    for(let elemento of arreglo){
        if(typeof elemento === 'string'){
            resultado.push((elemento as string).toUpperCase());
        }
    }
    return resultado
}

let arregloMixto: (number | string | boolean)[] = [10, 'ADA', true]
let filtrados = filtrarElementos(arregloMixto)
console.log(filtrados)