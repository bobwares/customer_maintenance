// App: Customer CRUD Application
// Package: customer-api
// File: src/customers/dto/address.dto.ts
// Version: 2.0.40
// Author: Bobwares
// Date: 2025-06-05 03:31:23 UTC
// Description: Data transfer object for customer addresses.
//
import { IsString, Length, Matches } from 'class-validator';

export class AddressDto {
  @IsString()
  street!: string;

  @IsString()
  city!: string;

  @IsString()
  @Length(2, 2)
  state!: string;

  @IsString()
  @Matches(/^\d{5}$/)
  zipcode!: string;
}
