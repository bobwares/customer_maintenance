// App: Customer CRUD Application
// Package: customer-api
// File: src/customers/customers.module.ts
// Version: 2.0.32
// Author: Bobwares
// Date: 2025-06-04 21:28:20 UTC
// Description: Module defining the customers feature.
//
import { Module } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CustomersController } from './customers.controller';

@Module({
  controllers: [CustomersController],
  providers: [CustomersService],
})
export class CustomersModule {}
