const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { mongoose } = require('./bookdb.js');
var bookcontroller = require('./controllers/bookcontroller.js');

var app = express();
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200' }));

app.listen(4000, () => console.log('Server started at port : 4000'));


app.use('/books', bookcontroller);
const path = require('path');
 app.use(express.static(`./dist/library`));
app.get(`/*`, function(req, res) {
 res.sendFile(path.join(__dirname + '/dist/library>/index.html'));})
