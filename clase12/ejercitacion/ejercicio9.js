// Ejercicio 9
const prompt = require("prompt-sync")({ sigint: true});
console.log('CONTROL DE GASTOS');
console.log('Opciones:');
console.log('Total de gastos de una semana: escriba 1');
console.log('Estadistica de un dia: escriba 2');
console.log('Total de gastos del mes: escriba 3');
console.log('Semana con mas gastos: escriba 4');
console.log('Dia con mas gastos: escriba 5');

let matriz = [
    [1135, 2500, 900, 1600, 2800, 3650, 1100],
    [1750, 1890, 1900, 1300, 898, 1750, 2800],
    [1700, 1150, 1690, 1900, 1770, 4500, 2560],
    [800, 1250, 1430, 2100, 1980, 1270, 950]
];

let opcion = prompt('Ingrese la que accion quiere realizar: ');
let suma = 0;

if(opcion == '1'){
    let semana = parseFloat(prompt('Ingrese el numero de la semana : '));
    for(let i = 0; i < matriz[semana-1].length; i++){
        suma = matriz[semana-1][i] + suma;
    }
    console.log(`El total de gastos de la semana ${semana} es ${suma}`);
} else if(opcion == '2'){
    let dia = parseFloat(prompt('Ingrese el dia : '));
    if( dia <= 7){
        console.log(`El total de gastos del dia ${dia} es ${matriz[0][dia-1]}`);
    } else if(dia >= 8 && dia <= 14){
        console.log(`El total de gastos del dia ${dia} es ${matriz[1][dia-8]}`);
    } else if(dia >= 15 && dia <= 21){
        console.log(`El total de gastos del dia ${dia} es ${matriz[2][dia-15]}`);
    } else if(dia >= 22 && dia <= 28){
        console.log(`El total de gastos del dia ${dia} es ${matriz[3][dia-22]}`);
    }
} else if(opcion == '3'){
    for(let i = 0; i < matriz.length; i++){
        for(let j = 0; j < matriz[i].length; j++){
            suma = matriz[i][j] + suma;
        }
    }
    console.log(`El total de gastos del mes son ${suma} pesos`);
} else if(opcion == '4'){
    let mayorGastoSemanal = 0;
    let semanaMayor = 0;
    for(let i = 0; i < matriz.length; i++){
        let gastoSemanal = 0;
        for(let j = 0; j < matriz[i].length; j++){
            gastoSemanal += matriz[i][j];
        }
        if(gastoSemanal > mayorGastoSemanal){
            mayorGastoSemanal = gastoSemanal;
            semanaMayor = i + 1;
        }
    }
   console.log(`La semana que mas se gasto fue la semana ${semanaMayor}, connun gasto de ${mayorGastoSemanal}`);
} else if(opcion == '5'){
    let mayorGastoDia = 0;
    let diaMayor = '';
    for(let i = 0; i < matriz.length; i++){
        for(let j = 0; j < matriz[i].length; j++){
            if(matriz[i][j] > mayorGastoDia){
                    mayorGastoDia = matriz[i][j];
                    diaMayor = i + 1;
            }
        }
    }
    console.log(`El dia que mas se gasto fue ${diaMayor} con un gasto de ${mayorGastoDia}`);
}

