const mysql = require('mysql');

var connection = mysql.createConnection({
  host: "localhost",
  user: 'root',
  database: 'shopping',
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("DB Connected!!");
});

// connection.query(`INSERT INTO accountInfo (name,email,password) VALUES ('three', "blah@gmail.com", "idk")`, function(err, results) {
// 	if (err) {console.log("ERRRR connecting")}
// 		else {
// 			console.log("Things work probably")
// 		}
// })

module.exports = connection;