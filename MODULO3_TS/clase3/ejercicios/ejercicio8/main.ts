import createMultiplier from "./higherOrderFuntions";

const multiplyBy2 = createMultiplier(2)
const result = multiplyBy2(5)
console.log('Resultado: ', result)