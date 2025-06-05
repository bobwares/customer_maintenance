// App: Customer CRUD Application
// Package: customer-api
// File: src/customers/dto/update-customer.dto.ts
// Version: 2.0.34
// Author: Bobwares
// Date: 2025-06-05 00:14:14 UTC
// Description: DTO for updating a customer.
//
import { PartialType } from '@nestjs/mapped-types';
import { CreateCustomerDto } from './create-customer.dto';

export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {}
