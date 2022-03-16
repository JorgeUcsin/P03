const http = require("http");
const express = require("express");
const puerto = 3000;
const app = express();
const path = require("path");
const misRutas = require('./router/index');


// Configuraciones
// motor de vistas

app.set('views engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);

app.use(misRutas);
app.listen(puerto, () => {

    console.log("Iniciamos el puerto");

})


