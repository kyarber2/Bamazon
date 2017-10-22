DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

SELECT * FROM products;

CREATE TABLE products(
`id` INTEGER(11) AUTO_INCREMENT NOT NULL,
`product_name` VARCHAR(50),
`department_name` VARCHAR(50),
`price` INTEGER(11),
`stock_quantity` INTEGER(11),
PRIMARY KEY (`id`)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Coconut Water", "Grocery", "2.00", "20"), ("Predator", "Entertainment", "9.50", "50"), ("Toothbrush", "Personal Care", "1.25", "30");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Floss", "Personal Care", ".50", "27"), ("Kill Bill", "Entertainment", "11", "18"), ("Almond Yogurt", "Grocery", "1.85", "45");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Contact Solution", "Personal Care", "3.45", "41"), ("Stranger Things", "Entertainment", "15.50", "7"), ("Cashew Yogurt", "Grocery", "1.67", "55"), ("Black Tea", "Grocery", "2.50", "10");

