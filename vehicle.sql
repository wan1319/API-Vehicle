-- Set SQL mode and transaction properties
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

-- Create the "users" table
CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  email VARCHAR(255),
  password VARCHAR(255),
  fullname VARCHAR(255),
  photo VARCHAR(255),
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);

-- Create the "vehicle_brands" table
CREATE TABLE vehicle_brands (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255),
  photo VARCHAR(255),
  created_at TIMESTAMP,
  updated_at TIMESTAMP,
  created_by INTEGER,
  updated_by INTEGER,
  FOREIGN KEY (created_by) REFERENCES users(id),
  FOREIGN KEY (updated_by) REFERENCES users(id)
);

-- Create the "vehicles" table
CREATE TABLE vehicles (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255),
  vehicle_brand_id INTEGER,
  photo VARCHAR(255),
  price DECIMAL(10, 2),
  year INTEGER,
  created_at TIMESTAMP,
  updated_at TIMESTAMP,
  created_by INTEGER,
  updated_by INTEGER,
  FOREIGN KEY (vehicle_brand_id) REFERENCES vehicle_brands(id),
  FOREIGN KEY (created_by) REFERENCES users(id),
  FOREIGN KEY (updated_by) REFERENCES users(id)
);

-- Create the "orders" table
CREATE TABLE orders (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  user_id INTEGER,
  vehicle_id INTEGER,
  created_at TIMESTAMP,
  updated_at TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (vehicle_id) REFERENCES vehicles(id)
);