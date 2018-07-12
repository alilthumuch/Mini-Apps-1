const connection = require('./connection.js')

const postAccountInfo = function(cb){
	var queryStr = `INSERT INTO accountInfo(name, email, password) VALUES(?:?:?)`;
	connection.query(queryStr, [name,email,password], cb);
};

const postUserAddress = function(cb){
	var queryStr = `INSERT INTO userAddress(address1, address2, state, zip, userID) VALUES(?:?:?:?)`;
	connection.query(queryStr, [address1, address2, state, zip, userID], cb);
};

// const postUserAddress = function(cb){
// 	var queryStr = `INSERT INTO userAddress(address1, address2, state, zip, userID) VALUES(?:?:?:?)`;
// 	connection.query(queryStr, [address1, address2, state, zip, userID], cb);
// };

const postUserCreditCard = function(cb){
	var queryStr = `INSERT INTO userAddress(cardNumber, expiryDate, cvv, billingZip, userID) VALUES(?:?:?:?)`;
	connection.query(queryStr, [cardNumber, expiryDate, cvv, billingZip, userID], cb);
};


module.exports.getAccountInfo = postAccountInfo;
module.exports.getUserAddress = postUserAddress;
module.exports.postUserCreditCard = postUserCreditCard;