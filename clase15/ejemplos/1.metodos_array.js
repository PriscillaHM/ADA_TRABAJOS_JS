//METODOS ARRAY

let razaPerros = ['Labrador', 'BullDog', 'Beagle', 'Pug'];
console.log('Array inicial: ',razaPerros);

// 1. Metodo Push: Agrega uno o mas elementos al final del array
razaPerros.push('Husky');
console.log('Array despues de push (Husky): ', razaPerros);

// 2. Metodo pop: Elimina el ultimo elemetnos del array y lo retorna
let razaEliminada = razaPerros.pop();
console.log('Array despues de pop (Husky)', razaPerros);
console.log('Raza eliminada con pop', razaEliminada);

// 3. Metodo shift: Elimina el primer elementos del array y lo devuelve
let primeraRazaEliminada = razaPerros.shift();
console.log('Array despues de shift', razaPerros);
console.log('Raza eliminada con shift', primeraRazaEliminada);

// 4. Metodo unShift: Agrega uno o mas elementos al inicio del array
razaPerros.unshift('Chihuhua');
console.log('Array despues de unShift (Chihuhua): ', razaPerros);

// 5. Metodo join: Une todo los elementos del array en un string, separados por un delimitador
let razaEnString = razaPerros.join(' - ');
console.log('Array separado con join ( - )', razaEnString);

// 6. Metodo indexOf: Devuelve el primer indice donde se encuentre el elemntos, devuelve -1 si no lo encuentra
let indiceBeagle = razaPerros.indexOf('Beagle');
console.log('Indice de Beagle con indexOf: ', indiceBeagle);
let indicePastorAleman =  razaPerros.indexOf('Pastor Aleman');
console.log('Indice de Pastor Aleman: ', indicePastorAleman);

// 7. Metodo lastIndexOf: Devuleve el ultimo indice donde se encuentra el elemento, devuelve -1 si no esta presente
let razaDuplicada = ['Beagle', 'Bulldog', 'Pug', 'Beagle', 'Dalmata'];
console.log('Array con inicial con duplucados: ', razaDuplicada);
let ultimoIndice = razaDuplicada.lastIndexOf('Beagle');
console.log('Ultimo indice donde esta Beagle con lastIndexOf: ', ultimoIndice);

// 8. Metodo includes: Devuelve true si esta el ementos y false si no esta
let razaEncontrada = razaPerros.includes('Pug');
console.log('El array contiene Pug? ', razaEncontrada);
let razaNoEncontrada = razaPerros.includes('Caniche');
console.log('El array contiene caniche? ', razaNoEncontrada);