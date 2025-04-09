//Declaramos primero las funciones y constantes
//Luego exportamos al final del archivo utilizando la exportacion separada

const calculateRectangleArea = (width: number, height: number): number =>{
    return width * height
}

const RECTANGLE_NAME = "Rectangle"

//Exportacion 
export {calculateRectangleArea, RECTANGLE_NAME}