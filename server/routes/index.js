//Importa express
const express = require('express');
//Obtiene el Router de express
const router = express.Router();
//Importa fs que permite mover el archivo entre otras cosas
const fs = require('fs');

module.exports = () => {

    router.get('/', (req, res) => {
        res.render('index');
    });

    router.get('/arjs', (req, res) => {
        res.render('arjs');
    });

    router.get('/markercreator', (req, res) => {
        res.render('markercreator');
    });

    router.get('/addmarker', (req, res) => {
        res.render('addmarker');
    });

    router.post('/images', (req, res) => {
        console.log(req.fields);
        console.log(req.files);
        
        fs.copyFile(req.files.image.path, `public/images/${req.files.image.name}`, () => {
            //res.redirect(`/server/markercreator`);
            console.log('imagen');
        });

        fs.copyFile(req.files.fileIset.path, `public/images/${req.files.fileIset.name}.iset`, () => {
            console.log('iset');
        });

        fs.copyFile(req.files.fileFset.path, `public/images/${req.files.fileFset.name}.fset`, () => {
            console.log('fset');
        });
        
        fs.copyFile(req.files.fileFset3.path, `public/images/${req.files.fileFset3.name}.fset3`, () => {
            console.log('fset3');
        });

        res.redirect(`/server/markercreator`);
    });

    router.post('/test', (req, res) => {
        console.log(req.fields);
        res.json({mensaje: 'Test API POST'});
    });

    router.get('/test', (req, res) => {
        res.json({mensaje: 'Test API GET'});
    });

    return router;
}