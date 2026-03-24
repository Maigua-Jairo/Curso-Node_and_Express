'use strict';
require('dotenv').config();
const express = require('express');
const myDB = require('./connection');
const fccTesting = require('./freeCodeCamp/fcctesting.js');

const app = express();

fccTesting(app); 
// 1. MIDDLEWARES
app.use('/public', express.static(process.cwd() + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2. CONFIGURACIÓN DE PUG 
app.set('view engine', 'pug');
app.set('views', './views/pug'); 

// 3. RUTAS
app.route('/').get((req, res) => {
  res.render('index'); 
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Listening on port ' + PORT);
});