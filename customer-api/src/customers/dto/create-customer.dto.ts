// App: Customer CRUD Application
// Package: customer-api
// File: src/customers/dto/create-customer.dto.ts
// Version: 2.0.35
// Author: Bobwares
// Date: 2025-06-05 01:23:21 UTC
// Description: DTO for creating a customer.
//
import {
  IsInt,
  IsString,
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
