//Importa express
const express = require('express');
//Importa las variables de entorno
require('dotenv').config({path: 'variables.env'});
//Importa el router
const router = require('./routes');
//Importa path
const path = require('path');
//Importa express-formidable
const formidable = require('express-formidable');

//Crea el servidor
const app = express();

//Asigna directorio estatico
app.use('/public', express.static('public'));

//Configura pug como view
app.set('view engine', 'pug');
//COnfigura ruta de pug
app.set('views', path.join(__dirname, './views'));

//Configura el formidable
app.use(formidable({
    encoding: 'utf-8',
    //uploadDir: 'output',
    multiples: true,
    keepExtensions: true
}));

//Habilita routing
app.use('/server', router());

//Asigna el host
const host = process.env.HOST || '0.0.0.0';
//Asigna el puerto
const port = process.env.PORT || 3000;

//Arranca el servidor
app.listen(port, host, () => {
    console.log(`Servidor iniciado en ${host} : ${port}`);
});