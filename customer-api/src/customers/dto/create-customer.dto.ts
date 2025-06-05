// App: Customer CRUD Application
// Package: customer-api
// File: src/customers/dto/create-customer.dto.ts
// Version: 2.0.37
// Author: Bobwares
// Date: 2025-06-05 02:43:30 UTC
// Description: DTO for creating a customer.
//
import {
  IsInt,
  IsString,
  IsEmail,
  Min,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { AddressDto } from './address.dto';

export class CreateCustomerDto {
  @IsString()
  first!: string;

  @IsString()
  last!: string;

  @IsEmail()
  email!: string;

  @IsInt()
  @Min(0)
  age!: number;

  @ValidateNested()
  @Type(() => AddressDto)
  address!: AddressDto;
}
