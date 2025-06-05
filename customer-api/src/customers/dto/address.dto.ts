// App: Customer CRUD Application
// Package: customer-api
// File: src/customers/dto/address.dto.ts
// Version: 2.0.43
// Author: Bobwares
// Date: 2025-06-05 07:09:46 UTC
// Description: Data transfer object for customer addresses.
//
import { IsString, Length, Matches } from 'class-validator';

export class AddressDto {
  @IsString()
  street!: string;

  @IsString()
  city!: string;

  @IsString()
  @Length(2, 30)
  state!: string;

  @IsString()
  @Matches(/^\d{5}(-\d{4})?$/)
  zipcode!: string;
}
