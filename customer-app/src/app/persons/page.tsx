// App: Customer CRUD Application
// Package: customer-app
// File: src/app/persons/page.tsx
// Version: 2.0.34
// Author: Bobwares
// Date: 2025-06-05 00:14:14 UTC
// Description: Person maintenance page using person API backend.
//
"use client";
import { useEffect, useState } from 'react';
import styles from './page.module.css';

interface Address {
  street: string;
  city: string;
  state: string;
  zipcode: string;
}

interface Person {
  id: number;
  first: string;
  last: string;
  age: number;
  address: Address;
}

const API_URL = 'http://localhost:3001/persons';

export default function PersonsPage() {
  const [persons, setPersons] = useState<Person[]>([]);
  const [form, setForm] = useState<Person>({
    id: 0,
    first: '',
    last: '',
    age: 0,
    address: { street: '', city: '', state: '', zipcode: '' },
  });
  const [editingId, setEditingId] = useState<number | null>(null);

  const loadPersons = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    setPersons(data);
  };

  useEffect(() => {
    loadPersons();
  }, []);

  const resetForm = () => {
    setForm({
      id: 0,
      first: '',
      last: '',
      age: 0,
      address: { street: '', city: '', state: '', zipcode: '' },
    });
    setEditingId(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = { ...form };
    if (editingId === null) {
      await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
    } else {
      await fetch(`${API_URL}/${editingId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
    }
    resetForm();
    loadPersons();
  };

  const handleEdit = (id: number) => {
    const person = persons.find((p) => p.id === id);
    if (!person) return;
    setForm(person);
    setEditingId(id);
  };

  const handleDelete = async (id: number) => {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    if (editingId === id) {
      resetForm();
    }
    loadPersons();
  };

  const setAddress = (key: keyof Address, value: string) => {
    setForm((prev) => ({
      ...prev,
      address: { ...prev.address, [key]: value },
    }));
  };

  return (
    <div className={styles.container}>
      <h1>Person Maintenance</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label>
          First
          <input
            value={form.first}
            onChange={(e) => setForm({ ...form, first: e.target.value })}
            required
          />
        </label>
        <label>
          Last
          <input
            value={form.last}
            onChange={(e) => setForm({ ...form, last: e.target.value })}
            required
          />
        </label>
        <label>
          Age
          <input
            type="number"
            value={form.age}
            onChange={(e) => setForm({ ...form, age: Number(e.target.value) })}
            min={0}
            required
          />
        </label>
        <label>
          Street
          <input
            value={form.address.street}
            onChange={(e) => setAddress('street', e.target.value)}
            required
          />
        </label>
        <label>
          City
          <input
            value={form.address.city}
            onChange={(e) => setAddress('city', e.target.value)}
            required
          />
        </label>
        <label>
          State
          <input
            value={form.address.state}
            onChange={(e) => setAddress('state', e.target.value)}
            required
            maxLength={2}
          />
        </label>
        <label>
          Zipcode
          <input
            value={form.address.zipcode}
            onChange={(e) => setAddress('zipcode', e.target.value)}
            required
          />
        </label>
        <div className={styles.formButtons}>
          <button type="submit" className={styles.button}>
            {editingId === null ? 'Add' : 'Update'}
          </button>
          <button
            type="button"
            onClick={resetForm}
            className={`${styles.button} ${styles.cancelButton}`}
          >
            {editingId === null ? 'Reset' : 'Cancel'}
          </button>
        </div>
      </form>

      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>First</th>
              <th>Last</th>
              <th>Age</th>
              <th>Street</th>
              <th>City</th>
              <th>State</th>
              <th>Zipcode</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {persons.map((p) => (
              <tr key={p.id}>
                <td>{p.first}</td>
                <td>{p.last}</td>
                <td>{p.age}</td>
                <td>{p.address.street}</td>
                <td>{p.address.city}</td>
                <td>{p.address.state}</td>
                <td>{p.address.zipcode}</td>
                <td>
                  <button onClick={() => handleEdit(p.id)}>Edit</button>
                  <button onClick={() => handleDelete(p.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
