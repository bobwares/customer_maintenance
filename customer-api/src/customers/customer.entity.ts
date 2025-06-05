// App: Customer CRUD Application
// Package: customer-api
// File: src/customers/customer.entity.ts
// Version: 2.0.36
// Author: Bobwares
// Date: 2025-06-05 01:47:43 UTC
// Description: TypeORM entity representing a customer with email and timestamps.
//
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

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
  email!: string;

  @Column()
  street!: string;

  @Column()
  city!: string;

  @Column()
  state!: string;

  @Column()
  zipcode!: string;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
