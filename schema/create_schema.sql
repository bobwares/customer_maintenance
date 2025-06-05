-- App: Customer CRUD Application
-- Package: schema
-- File: schema/create_schema.sql
-- Version: 2.0.41
-- Author: Bobwares
-- Date: 2025-06-05 06:37:28 UTC
-- Description: SQL statements to create address and customer tables.
--
CREATE TABLE IF NOT EXISTS address (
  id SERIAL PRIMARY KEY,
  street VARCHAR(255) NOT NULL,
  city VARCHAR(255) NOT NULL,
  state VARCHAR(255) NOT NULL,
  zipcode VARCHAR(10) NOT NULL
);

CREATE TABLE IF NOT EXISTS customer (
  id SERIAL PRIMARY KEY,
  first VARCHAR(255) NOT NULL,
  last VARCHAR(255) NOT NULL,
  age INTEGER NOT NULL,
  email VARCHAR(255) NOT NULL,
  "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "addressId" INTEGER REFERENCES address(id)
);
