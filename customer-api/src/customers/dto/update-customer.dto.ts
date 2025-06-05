// App: Customer CRUD Application
// Package: customer-api
// File: src/customers/dto/update-customer.dto.ts
// Version: 2.0.37
// Author: Bobwares
// Date: 2025-06-05 02:43:30 UTC
// Description: DTO for updating a customer.
//
import { PartialType } from '@nestjs/mapped-types';
import { CreateCustomerDto } from './create-customer.dto';

export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {}
