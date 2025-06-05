// App: Customer CRUD Application
// Package: customer-api
// File: src/customers/dto/address.dto.ts
// Version: 2.0.37
// Author: Bobwares
// Date: 2025-06-05 02:43:30 UTC
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
