-- App: Customer CRUD Application
-- Package: schema
-- File: schema/test_data.sql
-- Version: 2.0.41
-- Author: Bobwares
-- Date: 2025-06-05 06:37:28 UTC
-- Description: SQL insert statements for 10 customer records used as test data.
--
INSERT INTO address (street, city, state, zipcode) VALUES
  ('123 Main Street', 'Anytown', 'CA', '12345'),
  ('456 Elm Street', 'Los Angeles', 'CA', '56789'),
  ('789 Oak Street', 'San Francisco', 'CA', '90123'),
  ('101 Pine Street', 'San Diego', 'CA', '10101'),
  ('1234 Main Street', 'Fremont', 'CA', '94538'),
  ('456 Elm Street', 'Oakland', 'CA', '94607'),
  ('789 Oak Street', 'Berkeley', 'CA', '94704'),
  ('101 Pine Street', 'San Jose', 'CA', '95113'),
  ('1234 Main Street', 'Santa Cruz', 'CA', '95060'),
  ('987 Maple Street', 'Sacramento', 'CA', '94203');

INSERT INTO customer (first, last, age, email, "createdAt", "updatedAt", "addressId") VALUES
  ('John', 'Doe', 30, 'john.doe@example.com', '2024-01-01T00:00:00Z', '2024-01-01T00:00:00Z', 1),
  ('Jane', 'Smith', 25, 'jane.smith@example.com', '2024-01-02T00:00:00Z', '2024-01-02T00:00:00Z', 2),
  ('Mary', 'Williams', 40, 'mary.williams@example.com', '2024-01-03T00:00:00Z', '2024-01-03T00:00:00Z', 3),
  ('Peter', 'Jones', 35, 'peter.jones@example.com', '2024-01-04T00:00:00Z', '2024-01-04T00:00:00Z', 4),
  ('Susan', 'Brown', 20, 'susan.brown@example.com', '2024-01-05T00:00:00Z', '2024-01-05T00:00:00Z', 5),
  ('David', 'Green', 50, 'david.green@example.com', '2024-01-06T00:00:00Z', '2024-01-06T00:00:00Z', 6),
  ('Elizabeth', 'White', 60, 'elizabeth.white@example.com', '2024-01-07T00:00:00Z', '2024-01-07T00:00:00Z', 7),
  ('Michael', 'Black', 70, 'michael.black@example.com', '2024-01-08T00:00:00Z', '2024-01-08T00:00:00Z', 8),
  ('Sarah', 'Blue', 80, 'sarah.blue@example.com', '2024-01-09T00:00:00Z', '2024-01-09T00:00:00Z', 9),
  ('Robert', 'Gray', 45, 'robert.gray@example.com', '2024-01-10T00:00:00Z', '2024-01-10T00:00:00Z', 10);
