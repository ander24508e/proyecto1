
const express = require('express'); // Importa el módulo express
const ejs = require('ejs'); // Importa el motor de plantillas ejs
const path = require('path'); // Importa el módulo path para manejar rutas de archivos

const app = express(); // Crea una instancia de una aplicación Express

app.set("view engine", "ejs"); // Configura EJS como el motor de plantillas
app.set("views", path.join(__dirname, 'views')); // Establece el directorio de vistas como 'views'

app.get('/', (req, res) => { // Define una ruta para el directorio raíz
    res.render('index', { nombre: "Proyecto" }); // Renderiza la vista 'index.ejs' y pasa un objeto con la propiedad 'nombre'
});

app.get("/home", (request, response) => { // Define una ruta para '/home'
    response.send("Hola como estan"); // Envía una respuesta de texto
});

app.listen(6000, () => { // Inicia el servidor en el puerto 6000
    console.log("Servidor escuchando en el puerto 6000"); // Muestra un mensaje en la consola
});
