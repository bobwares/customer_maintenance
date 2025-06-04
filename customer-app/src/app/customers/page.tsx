// App: Customer CRUD Application
// Package: customer-app
// File: src/app/customers/page.tsx
// Version: 2.0.33
// Author: Bobwares
// Date: 2025-06-04 21:55:00 UTC
// Description: Customer maintenance page using customer-api backend.
//
"use client";
import { useEffect, useState } from 'react';
import styles from './page.module.css';

interface Customer {
  id: number;
  name: string;
  email: string;
}

const API_URL = 'http://localhost:3001/customers';

export default function CustomersPage() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [editingId, setEditingId] = useState<number | null>(null);

  const loadCustomers = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    setCustomers(data);
  };

  useEffect(() => {
    loadCustomers();
  }, []);

  const resetForm = () => {
    setName('');
    setEmail('');
    setEditingId(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId === null) {
      await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email }),
      });
    } else {
      await fetch(`${API_URL}/${editingId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email }),
      });
    }
    resetForm();
    loadCustomers();
  };

  const handleEdit = (id: number) => {
    const customer = customers.find((c) => c.id === id);
    if (!customer) return;
    setName(customer.name);
    setEmail(customer.email);
    setEditingId(id);
  };

  const handleDelete = async (id: number) => {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    if (editingId === id) {
      resetForm();
    }
    loadCustomers();
  };

  return (
    <div className={styles.container}>
      <h1>Customer Maintenance</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label>
          Name
          <input value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          Email
          <input value={email} onChange={(e) => setEmail(e.target.value)} required />
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
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((c) => (
              <tr key={c.id}>
                <td>{c.name}</td>
                <td>{c.email}</td>
                <td>
                  <button onClick={() => handleEdit(c.id)}>Edit</button>
                  <button onClick={() => handleDelete(c.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
