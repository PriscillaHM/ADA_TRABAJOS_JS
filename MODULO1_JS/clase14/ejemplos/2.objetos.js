//EJEMPLO 1 
//Definir un objeto 
/*
variable nombreObjeto = {
    propiedad1 : valor1,
    propiedad3 : valor 2,
    nombreMetodo : function(){
        return logica;
    }
}
*/

const coche = {
    //Propiedades
    marca : 'Toyota',
    modelo : 'Corolla',
    anio : 2022,
    color : 'negro',
    //Metodo
    describir : function(){
        return `Este auto es un ${this.marca} ${this.modelo} del anio ${this.anio} de color ${this.color}`;
    }
}

console.log(coche.describir());

//Acceder a las propiedades
console.log(coche.modelo);
console.log(coche.color);