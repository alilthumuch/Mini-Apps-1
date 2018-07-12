DROP DATABASE shopping;
CREATE DATABASE shopping;

USE shopping;

CREATE TABLE accountInfo (
  id INT NOT NULL AUTO_INCREMENT, 
  name  VARCHAR(150) NOT NULL,
  email  VARCHAR(150) NOT NULL,
  password VARCHAR(150) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE userAddress ( 
 id INT NOT NULL AUTO_INCREMENT, 
 address1  VARCHAR(150) NOT NULL,
 address2 VARCHAR(150) NOT NULL,
 state VARCHAR(150) NOT NULL,
 zip INT NOT NULL,
 userID INT,
 PRIMARY KEY (id)
);

CREATE TABLE creditCard (
  id INT NOT NULL AUTO_INCREMENT, 
  cardNumber INT NOT NULL,
  expiryDate  DATE NOT NULL,
  cvv  int NOT NULL,
  billingZip int NOT NULL,
  userID INT,
  PRIMARY KEY (id)
);

