//PROPIEDADES Y METODOS DE STRINGS

let descripcionPerro = '  El perro Aleman es un perro muy inteligente y leal. ';
console.log('Cadena original: ',descripcionPerro);

//PROPIEDADES
// 1. Propiedades length: Devuelve la longitud de la cadena
console.log('La longitu de la cade con .length es: ', descripcionPerro.length);

// 2. Propiedades indexOf: Devuelve el primer indice donde se encuentra una cadena o -1 si no esta
let indiceInteligente = descripcionPerro.indexOf('inteligente');
console.log('El indice de inteligente con indexOf: ', indiceInteligente);
let indiceLabrador = descripcionPerro.indexOf('Labrador');
console.log('El indice de Labrador con indexOf: ', indiceLabrador);

//METODOS
// 3. Metodo slice: Extraer una parte de la cadena entre dos indices y devuelve una nueva cadena
let subCadena = descripcionPerro.slice(3, 17);
console.log('La subcadena despues de slice en posicion 3 y 17: ',subCadena);

// 4. Metodo trim: Elimina los espacios en blanco del inicio y final
let cadenaEspacios = descripcionPerro.trim();
console.log('Cadena despues de trim: ',cadenaEspacios);

// 5. Metodo replace: Remplaza una subcadena por otra
let remplazo = descripcionPerro.replace('inteligente', 'gordito');
console.log('Cadena despues de replace: ', remplazo);

// 6. Metodo split: Divide la cadena en un array segun un delimitador
let palabras = descripcionPerro.split(' ');
console.log('Cadena dividida con split: ', palabras);