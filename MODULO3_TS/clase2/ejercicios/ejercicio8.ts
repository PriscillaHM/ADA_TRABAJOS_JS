// Ejercicio 8: Funciones con diferentes tipos de retorno 
// Consigna: Crea una función llamada calcularArea que acepte el tipo de figura 
// ("circulo" o "rectangulo") y luego acepte los parámetros necesarios para cada 
// tipo de figura (radio para el círculo y largo y ancho para el rectángulo). La 
// función debe retornar el área de la figura. Usa tipos específicos para cada caso. 
// type figura = 'circulo' | 'rectangulo'
// let areaFigura: figura = 'circulo'
const calcularArea = (areaFigura: string, radio?: number, base?: number, altura?: number) => {
    let area: number = 0
    if(areaFigura == 'circulo'){
        area = Math.PI * (radio * radio)
        return `El area del circulo es ${area}`
    } else {
        area = base * altura
        return `El area del rectangulo es ${area}`
    }

}
console.log(calcularArea('circulo', 3))