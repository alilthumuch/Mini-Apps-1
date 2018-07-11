
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

var data = [];
//'../client' == __dirname
app.use(express.static(path.join(__dirname, 'client'))); //set static file path

//parse the data, chunk it up for you and append a body element to request.
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/' + 'index.html')
})
app.get('/testing', function (req, res) {
  res.json(data) //stringify data and send it.
})

app.post('/', function(req,res) {
	var arrData = [];
	var keyArr = [];
	for (var key in req.body){
		if(key!== "children"){
			keyArr.push(key);
		}		
	}
	arrData.push(keyArr)
	var recurseData = function(data) {
		var innerArr = [];
		for (var key in data) {
			if(key !== "children"){
				innerArr.push(data[key])	
			}
		}
		arrData.push(innerArr)
		if (data.children.length === 0) {
			return;
		}
		for (var key in data.children) {
			recurseData(data.children[key]);
		}
	}
	recurseData(req.body)

	data = arrData;

	res.status(201).send(req.body);
})

app.listen(3000, () => {
	console.log("We are live!");
})

