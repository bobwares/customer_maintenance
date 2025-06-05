// App: Customer CRUD Application
// Package: customer-api
// File: src/persons/dto/create-person.dto.ts
// Version: 2.0.34
// Author: Bobwares
// Date: 2025-06-05 00:13:21 UTC
// Description: DTO for creating a person following PersonList schema.
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

export class CreatePersonDto {
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
