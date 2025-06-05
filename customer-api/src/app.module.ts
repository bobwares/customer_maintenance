// App: Customer CRUD Application
// Package: customer-api
// File: src/app.module.ts
// Version: 2.0.36
// Author: Bobwares
// Date: 2025-06-05 01:48:44 UTC
// Description: Root application module.
//
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { CustomersModule } from './customers/customers.module';
import { Customer } from './customers/customer.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT || '5432', 10),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      entities: [Customer],
      synchronize: true,
    }),
    CustomersModule,
  ],
})
export class AppModule {}
