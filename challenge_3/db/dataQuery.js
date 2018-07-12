const connection = require('./connection.js')

const postAccountInfo = function(name, email, password, cb){
	var queryStr = "INSERT INTO accountInfo(name, email, password) VALUES(?,?,?)";
	var dataValues = [name,email,password];
	connection.query(queryStr, dataValues, cb);
};

const postUserAddress = function(address1, address2, state, zip, username, cb){
	var queryStr = `INSERT INTO userAddress(address1, address2, state, zip, userID) VALUES(?,?, ?, ?,(SELECT id FROM accountInfo WHERE name = ?))`;
	connection.query(queryStr, [address1, address2, state, zip, userID], cb);
};

// const postUserAddress = function(cb){
// 	var queryStr = `INSERT INTO userAddress(address1, address2, state, zip, userID) VALUES(?:?:?:?)`;
// 	connection.query(queryStr, [address1, address2, state, zip, userID], cb);
// };

const postUserCreditCard = function(cardNumber, expiryDate, cvv, billingZip, username, cb){
	var queryStr = `INSERT INTO userAddress(cardNumber, expiryDate, cvv, billingZip, userID) VALUES(?,?,?,?,(SELECT id FROM accountInfo WHERE name = ?))`;
	connection.query(queryStr, [cardNumber, expiryDate, cvv, billingZip, userID], cb);
};


module.exports.postAccountInfo = postAccountInfo;
module.exports.postUserAddress = postUserAddress;
module.exports.postUserCreditCard = postUserCreditCard;