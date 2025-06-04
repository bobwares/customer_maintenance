// App: Customer CRUD Application
// Package: customer-api
// File: src/customers/customer.entity.ts
// Version: 2.0.33
// Author: Bobwares
// Date: 2025-06-04 21:55:00 UTC
// Description: TypeORM entity representing a customer.
//
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  email!: string;
}
