// Actividad 2: Seguimiento de series de televisión
// Consigna: ¡Es hora de organizar tus series favoritas! Crea un programa 
// que permita:
// 1. Registrar una serie: Se debe registrar una serie con su nombre y 
// la cantidad de temporadas.
// 2. Listar las series: Muestra todas las series registradas.
// 3. Actualizar las temporadas de una serie: Permite actualizar la 
// cantidad de temporadas de una serie.

//PASO 1 Importacion
const fs = require('fs');
const filePath = './series.json';

//PASO 2 Funcion para leer series
const leerSeries = () =>{
    if(!fs.existsSync(filePath)){
        fs.writeFileSync(filePath, '[]')
    }
    const contenido = fs.readFileSync(filePath, 'utf-8')//leemos el archivo 
    return JSON.parse(contenido)
}

//PASO 3 Funcion para escribir en el archivo json
const escribirSeries = (series) =>{
    fs.writeFileSync(filePath, JSON.stringify(series, null,2))
}

//PASO 4 Agregar una serie
const agregarSerie = (nombreSerie, temporadas) =>{
    const series = leerSeries()
    series.push({id: series.length + 1, nombre: nombreSerie, temporadas: temporadas})
    escribirSeries(series)
    console.log('Serie agregada correctamente: ', nombreSerie)
}

//PASO 5  Listar libros
const listarSeries = () =>{
    const series = leerSeries()
    console.log('Lista de series: ')
    series.forEach(serie =>{
        console.log(`${serie.id}. ${serie.nombre} Temporadas: ${serie.temporadas}`)
    })
}

//PASO 6 Actualizar las temporadas de una serie
const actualizarTemporadas = (id, temporadasActualizadas) =>{
    const series = leerSeries()
    const serie =  series.find((temps) => temps.id === parseInt(id))
    if(serie){
        serie.temporadas = temporadasActualizadas
        escribirSeries(series)
        console.log('Serie actualizada: ', serie.nombre, 'Temporadas: ', serie.temporadas)
    } else{
        console.log('Serie no encontrada')
    }
}

// agregarSerie('The good place', 4);
// listarSeries()
// actualizarTemporadas(1, 3);
// agregarSerie('Modern Family', 11)
listarSeries()