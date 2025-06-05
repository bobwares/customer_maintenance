// App: Customer CRUD Application
// Package: customer-api
// File: src/customers/customer.entity.ts
// Version: 2.0.40
// Author: Bobwares
// Date: 2025-06-05 03:31:23 UTC
// Description: TypeORM entity representing a customer with email and timestamps.
//
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Address } from './address.entity';

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

  @OneToOne(() => Address, { cascade: true, eager: true })
  @JoinColumn()
  address!: Address;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
