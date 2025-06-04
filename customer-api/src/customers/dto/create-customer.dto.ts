// App: Customer CRUD Application
// Package: customer-api
// File: src/customers/dto/create-customer.dto.ts
// Version: 2.0.33
// Author: Bobwares
// Date: 2025-06-04 21:55:00 UTC
// Description: DTO for creating a customer.
//
import { IsEmail, IsString } from 'class-validator';

export class CreateCustomerDto {
  @IsString()
  name!: string;

  @IsEmail()
  email!: string;
}
