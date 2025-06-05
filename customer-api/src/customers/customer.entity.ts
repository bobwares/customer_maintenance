// App: Customer CRUD Application
// Package: customer-api
// File: src/customers/customer.entity.ts
// Version: 2.0.35
// Author: Bobwares
// Date: 2025-06-05 01:22:37 UTC
// Description: TypeORM entity representing a customer.
//
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  first!: string;

  @Column()
  last!: string;

  @Column()
  age!: number;

  @Column()
  street!: string;

  @Column()
  city!: string;

  @Column()
  state!: string;

  @Column()
  zipcode!: string;
}
