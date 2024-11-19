# Ejercicios y ejemplos hechos en el curso Introduccion al lenguaje JS
# Instalacion de prompt sync
1. Abrir una terminar y navegar hasta la carpeta donde se trabajara,
   escribir el siguiente comando y dar enter.
   
   		npm i prompt-sync
2. Al instalarse correctamente se creara automaticamente la carpeta node_modules y el archivo package-lock.json
3. Para poder usar prompt es necesario escribir la siguiente linea de código al inicio del archivo donde se trabajara.
   
   		const prompt = require("prompt-sync")({ sigint: true});
   En caso de tener problemas usar la siguiente linea de código.

   		const prompt = require("prompt-sync")();
