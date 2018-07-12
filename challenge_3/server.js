var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var shopping = require('../db/dataQuery.js')


var app = express();

//chunks up data and add body element to req. 
app.use(bodyParser.json());
//don't know what this does. 
app.use(bodyParser.urlencoded({ extended: true }));

//set static folder where your view files are 
app.use(express.static('public'))


app.get('/', (req, res) => {
	shopping.
	//var path = __dirname + '/' + 'index.html'
	res.sendFile(path.join(__dirname + '/index.html'));
})

app.listen(3000, () => console.log("We're LIVE folks!"))

