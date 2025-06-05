// App: Customer CRUD Application
// Package: customer-api
// File: src/customers/address.entity.ts
// Version: 2.0.40
// Author: Bobwares
// Date: 2025-06-05 03:31:23 UTC
// Description: TypeORM entity representing an address.
//
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Address {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  street!: string;

  @Column()
  city!: string;

  @Column()
  state!: string;

  @Column()
  zipcode!: string;
}
