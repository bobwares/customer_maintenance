// App: Customer CRUD Application
// Package: customer-api
// File: src/persons/persons.module.ts
// Version: 2.0.34
// Author: Bobwares
// Date: 2025-06-05 00:13:21 UTC
// Description: Module defining the persons feature.
//
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonsService } from './persons.service';
import { PersonsController } from './persons.controller';
import { Person } from './person.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Person])],
  controllers: [PersonsController],
  providers: [PersonsService],
})
export class PersonsModule {}
