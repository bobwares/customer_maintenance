// App: Customer CRUD Application
// Package: customer-api
// File: src/persons/persons.service.ts
// Version: 2.0.34
// Author: Bobwares
// Date: 2025-06-05 00:13:21 UTC
// Description: Business logic for managing persons.
//
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Person } from './person.entity';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';

@Injectable()
export class PersonsService {
  constructor(
    @InjectRepository(Person)
    private readonly repo: Repository<Person>,
  ) {}

  async create(dto: CreatePersonDto): Promise<Person> {
    const person = this.repo.create(dto);
    return this.repo.save(person);
  }

  findAll(): Promise<Person[]> {
    return this.repo.find();
  }

  async findOne(id: number): Promise<Person> {
    const person = await this.repo.findOne({ where: { id } });
    if (!person) {
      throw new NotFoundException(`Person ${id} not found`);
    }
    return person;
  }

  async update(id: number, dto: UpdatePersonDto): Promise<Person> {
    const person = await this.findOne(id);
    Object.assign(person, dto);
    return this.repo.save(person);
  }

  async remove(id: number): Promise<void> {
    await this.repo.delete(id);
  }
}
