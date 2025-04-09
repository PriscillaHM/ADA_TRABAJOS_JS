// Ejercicio 8: Funciones con diferentes tipos de retorno 
// Consigna: Crea una función llamada calcularArea que acepte el tipo de figura 
// ("circulo" o "rectangulo") y luego acepte los parámetros necesarios para cada 
// tipo de figura (radio para el círculo y largo y ancho para el rectángulo). La 
// función debe retornar el área de la figura. Usa tipos específicos para cada caso. 

type Figura = 'circulo' | 'rectangulo'

const calcularArea = (
    tipoFigura: Figura , 
    radio?: number, 
    base?: number, 
    altura?: number
): string => {
    let area: number 

    if(tipoFigura === 'circulo'){
        if (radio === undefined) {
            return 'Error: falta el radio para calcular el área del círculo.';
          }
        area = Math.PI * Math.pow(radio, 2);
        return `El area del circulo es ${area.toFixed(2)}`
    } else if(tipoFigura === 'rectangulo'){
        if (base === undefined || altura === undefined) {
            return 'Error: faltan base y/o altura para calcular el área del rectángulo.';
          }
        area = base * altura
        return `El area del rectangulo es ${area.toFixed(2)}`
    } else {
        return 'Tipo de figura no válida.';
    }

}
console.log(calcularArea('circulo', 3))
console.log(calcularArea('rectangulo', undefined, 4 ,5))