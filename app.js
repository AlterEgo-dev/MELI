const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const puerto = process.env.puerto || 3001;
const mainRoute = require('./src/routes/main')

app.use(express.json());
app.use('/', express.static(__dirname + '/public'));

app.listen(puerto, () => {
    console.log(`Aplicación corriendo en puerto ${puerto}`);
});

app.use('/', mainRoute);