const express = require('express')
const path = require('path');

const DIRECTORY_PATH = path.join(__dirname, '../public');

const app = express();

app.use(express.static(DIRECTORY_PATH));
app.set('view engine', 'hbs')
app.use(express.json());

app.get('', (req, res) => {
    res.render('index');
});

module.exports = app;
