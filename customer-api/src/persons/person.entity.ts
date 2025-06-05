// App: Customer CRUD Application
// Package: customer-api
// File: src/persons/person.entity.ts
// Version: 2.0.34
// Author: Bobwares
// Date: 2025-06-05 00:13:21 UTC
// Description: TypeORM entity representing a person.
//
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

interface Address {
  street: string;
  city: string;
  state: string;
  zipcode: string;
}

@Entity()
export class Person {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  first!: string;

  @Column()
  last!: string;

  @Column()
  age!: number;

  @Column('jsonb')
  address!: Address;
}
