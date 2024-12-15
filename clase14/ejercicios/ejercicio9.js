// Ejercicio 9: Última aparición de un modelo de auto
// En este ejercicio, trabajaremos con una lista de modelos de autos. 
// Implementa una función llamada ultimaAparicionModeloAuto(modelo) que 
// encuentre y muestre la última posición en la lista donde aparece el modelo 
// específico de auto dado por modelo.
let modeloAutos = ['Ford', 'Fiat', 'Chevrolet', 'Tesla', 'Tesla', 'Ford', 'Chevrolet'];

let ultimaAparicionModeloAuto = (modelo) => {
    let ultimoIndice = -1;

    for (let i = 0; i < modeloAutos.length; i++) {
        if (modeloAutos[i] === modelo) {
            indiceUltimo = i;
        }
    }

    if (indiceUltimo !== -1) {
        console.log(`El modelo ${modelo} se encuentra en la posición ${indiceUltimo + 1}`);
    } else {
        console.log(`El modelo ${modelo} no está presente en la lista.`);
    }
}

ultimaAparicionModeloAuto('Fiat');