// App: Customer CRUD Application
// Package: customer-api
// File: src/customers/customers.module.ts
// Version: 2.0.40
// Author: Bobwares
// Date: 2025-06-05 03:31:23 UTC
// Description: Module defining the customers feature.
//
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomersService } from './customers.service';
import { CustomersController } from './customers.controller';
import { Customer } from './customer.entity';
import { Address } from './address.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Customer, Address])],
  controllers: [CustomersController],
  providers: [CustomersService],
})
export class CustomersModule {}
