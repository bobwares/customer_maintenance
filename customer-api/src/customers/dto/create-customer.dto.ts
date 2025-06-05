// App: Customer CRUD Application
// Package: customer-api
// File: src/customers/dto/create-customer.dto.ts
// Version: 2.0.34
// Author: Bobwares
// Date: 2025-06-05 00:14:14 UTC
// Description: DTO for creating a customer.
//
import { IsEmail, IsString } from 'class-validator';

export class CreateCustomerDto {
  @IsString()
  name!: string;

  @IsEmail()
  email!: string;
}
