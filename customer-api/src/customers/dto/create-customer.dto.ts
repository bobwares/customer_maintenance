// App: Customer CRUD Application
// Package: customer-api
// File: src/customers/dto/create-customer.dto.ts
// Version: 2.0.36
// Author: Bobwares
// Date: 2025-06-05 01:48:04 UTC
// Description: DTO for creating a customer.
//
import {
  IsInt,
  IsString,
  IsEmail,
  Length,
  Matches,
  Min,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

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

class AddressDto {
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
