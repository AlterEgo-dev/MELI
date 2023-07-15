const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const puerto = 3001;

app.use(express.json());
app.use('/', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'))
})

app.listen(puerto, () => {
    console.log(`Aplicación corriendo en puerto ${puerto}`);
});