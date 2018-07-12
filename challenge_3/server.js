var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var shopping = require('./db/dataQuery.js')


var app = express();

//chunks up data and add body element to req. 
app.use(bodyParser.json());
//don't know what this does. 
app.use(bodyParser.urlencoded({ extended: true }));

//set static folder where your view files are 
app.use(express.static('public'))


app.get('/', (req, res) => {
	//var path = __dirname + '/' + 'index.html'
	res.sendFile(path.join(__dirname + '/index.html'));
})

app.post('/form1', (req, res) => {
	shopping.postAccountInfo(req.body.name, req.body.email, req.body.password, (err, data) => {
		if(err) {
			return res.status(500).send(err);
		} else{
			res.sendStatus(201)
		}
	})
})

app.post('/form2', (req, res) => {
	shopping.postUserAddress(req.body.address1, req.body.address2, req.body.state, req.body.zip, req.body.userID, (err, data) => {
		if(err) {
			return res.status(500).send(err);
		} else{
			res.sendStatus(201)
		}
	})
	
})

app.post('/form3', (req, res) => {
	shopping.postUserAddress(req.body.address1, req.body.address2, req.body.state, req.body.zip, req.body.userID, (err, data) => {
		if(err) {
			return res.status(500).send(err);
		} else{
			res.sendStatus(201)
		}
	})
})

app.listen(3000, () => console.log("We're LIVE folks!"))

