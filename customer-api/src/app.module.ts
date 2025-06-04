// App: Customer CRUD Application
// Package: customer-api
// File: src/app.module.ts
// Version: 2.0.30
// Author: Bobwares
// Date: 2025-06-04 21:28:20 UTC
// Description: Root application module.
//
import { Module } from '@nestjs/common';
import { CustomersModule } from './customers/customers.module';

@Module({
  imports: [CustomersModule],
})
export class AppModule {}
