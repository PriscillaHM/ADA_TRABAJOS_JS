//Ejercicio 6: El deportista
let deportista = {
    nombre: 'Justin',
    energia: 50,
    experiencia : 90,
    entrenarHoras: function(horas){
        console.log('La energia es ' + (this.energia - (horas * 5)));
        console.log('La experiencia es ' + (this.experiencia + (horas * 2)));
    }
};

deportista.entrenarHoras(8);