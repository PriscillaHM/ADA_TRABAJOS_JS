// Ejercicio 4: ¿Existe tu perfil? 
// Consigna:
// Antes de hacer cualquier cosa, asegúrate de que tu archivo perfil.json 
// existe. Si no existe, crea uno nuevo con un perfil básico.

const fs = require('fs')
const filePath = './perfil.json'

let perfilBasico = {
    nombre: 'Drako',
    edad: 5,
    ciudadFavorita: '',
    hobby: 'Comer'
}

const perfilExiste = () =>{
    if(!fs.existsSync(filePath)){
        fs.writeFileSync(filePath, perfilBasico)
    } else {
        console.log('El archivo ya existe')
    }
} 

perfilExiste()
