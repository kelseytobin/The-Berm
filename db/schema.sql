DROP DATABASE IF EXISTS berm_db;
CREATE DATABASE berm_db;

USE berm_db;

CREATE TABLE listings
(
	id int NOT NULL AUTO_INCREMENT,
	item_name varchar(255) NOT NULL,
	item_price DECIMAL(10,2),
    item_category varchar(255), 
    item_image LONGBLOB, 
    seller_email varchar(255),
    createdAt TIMESTAMP,
    sold BOOLEAN default false,
	PRIMARY KEY (id)
);
