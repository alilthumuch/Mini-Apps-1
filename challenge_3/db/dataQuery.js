const connection = require('./connection.js')

const getAccountInfo = function(cb){
	var queryStr = 'SELECT * from accountInfo';
	connection.query(queryStr, (err, data) => {
		if(err) {
			console.log("error getting data")
		} else {
			cb(null, data)
		}
	});
};

const getUserAddress = function(cb){
	var queryStr = 'SELECT * from userAddress';
	connection.query(queryStr, (err, data) => {
		if(err){
			console.log("error getting data")
		} else {
			cb(null, data);
		}
	})
};

modules.exports.getAccountInfo = getAccountInfo;
modules.exports.getUserAddress = getUserAddress;