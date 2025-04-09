//Importamos todas las funciones y constantes desde 4.index.ts
//Gracias a la reexportacion, esto demustra como las tres forma de exportarcion funcionan juntas en un proyecto

import {
    calculateCircleArea, 
    CIRCLE_NAME,
    calculateRectangleArea,
    RECTANGLE_NAME,
    calculateTriangleArea,
    TRIANGLE_NAME
} from './4.index'

const circleArea = calculateCircleArea(5)
console.log(`${CIRCLE_NAME}, area: ${circleArea}`)

const rectangleArea = calculateRectangleArea(10, 20)
console.log(`${RECTANGLE_NAME}, area: ${rectangleArea}`)

const triangleArea = calculateTriangleArea(10, 15)
console.log(`${TRIANGLE_NAME}, area: ${triangleArea}`)
