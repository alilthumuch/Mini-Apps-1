const express = require('express');
var bodyParser = require('body-parser')
var path = require('path')

const app = express();

// parse application/json
app.use(bodyParser.json())

//set up static file path. This is where your index.html file is 
app.use(express.static(path.join(__dirname, './client/dist')))

app.get('/', (req, res) => {

	res.send('Hello World!')
})



app.listen(3000, () => console.log('Example app listening on port 3000!'))

