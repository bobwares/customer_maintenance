-- App: Customer CRUD Application
-- Package: schema
-- File: schema/test_data.sql
-- Version: 2.0.38
-- Author: Bobwares
-- Date: 2025-06-05 02:52:50 UTC
-- Description: SQL insert statements for 10 customer records used as test data.
--

INSERT INTO customer (first, last, age, email, street, city, state, zipcode, "createdAt", "updatedAt") VALUES
  ('John', 'Doe', 30, 'john.doe@example.com', '123 Main Street', 'Anytown', 'CA', '12345', '2024-01-01T00:00:00Z', '2024-01-01T00:00:00Z'),
  ('Jane', 'Smith', 25, 'jane.smith@example.com', '456 Elm Street', 'Los Angeles', 'CA', '56789', '2024-01-02T00:00:00Z', '2024-01-02T00:00:00Z'),
  ('Mary', 'Williams', 40, 'mary.williams@example.com', '789 Oak Street', 'San Francisco', 'CA', '90123', '2024-01-03T00:00:00Z', '2024-01-03T00:00:00Z'),
  ('Peter', 'Jones', 35, 'peter.jones@example.com', '101 Pine Street', 'San Diego', 'CA', '10101', '2024-01-04T00:00:00Z', '2024-01-04T00:00:00Z'),
  ('Susan', 'Brown', 20, 'susan.brown@example.com', '1234 Main Street', 'Fremont', 'CA', '94538', '2024-01-05T00:00:00Z', '2024-01-05T00:00:00Z'),
  ('David', 'Green', 50, 'david.green@example.com', '456 Elm Street', 'Oakland', 'CA', '94607', '2024-01-06T00:00:00Z', '2024-01-06T00:00:00Z'),
  ('Elizabeth', 'White', 60, 'elizabeth.white@example.com', '789 Oak Street', 'Berkeley', 'CA', '94704', '2024-01-07T00:00:00Z', '2024-01-07T00:00:00Z'),
  ('Michael', 'Black', 70, 'michael.black@example.com', '101 Pine Street', 'San Jose', 'CA', '95113', '2024-01-08T00:00:00Z', '2024-01-08T00:00:00Z'),
  ('Sarah', 'Blue', 80, 'sarah.blue@example.com', '1234 Main Street', 'Santa Cruz', 'CA', '95060', '2024-01-09T00:00:00Z', '2024-01-09T00:00:00Z'),
  ('Robert', 'Gray', 45, 'robert.gray@example.com', '987 Maple Street', 'Sacramento', 'CA', '94203', '2024-01-10T00:00:00Z', '2024-01-10T00:00:00Z');
