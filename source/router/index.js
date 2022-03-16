const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Trabajando el servidor");
})

router.get('/index', (req, res) => {
    res.render('index.html', { titulo: 'Index' })
})

router.get('*', (req, res) => {
    res.send("No existe la pagina");
})

module.exports = router;
