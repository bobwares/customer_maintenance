"use client";
import { useState } from 'react';
import styles from './page.module.css';

interface Customer {
  id: number;
  first: string;
  last: string;
  phone: string;
}

export default function CustomersPage() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [phone, setPhone] = useState('');
  const [editingId, setEditingId] = useState<number | null>(null);

  const resetForm = () => {
    setFirst('');
    setLast('');
    setPhone('');
    setEditingId(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId === null) {
      const newCustomer: Customer = {
        id: Date.now(),
        first,
        last,
        phone,
      };
      setCustomers([...customers, newCustomer]);
    } else {
      setCustomers(customers.map(c => c.id === editingId ? { ...c, first, last, phone } : c));
    }
    resetForm();
  };

  const handleEdit = (id: number) => {
    const customer = customers.find(c => c.id === id);
    if (!customer) return;
    setFirst(customer.first);
    setLast(customer.last);
    setPhone(customer.phone);
    setEditingId(id);
  };

  const handleDelete = (id: number) => {
    setCustomers(customers.filter(c => c.id !== id));
    if (editingId === id) {
      resetForm();
    }
  };

  return (
    <div className={styles.container}>
      <h1>Customer Maintenance</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label>
          First Name
          <input value={first} onChange={e => setFirst(e.target.value)} required />
        </label>
        <label>
          Last Name
          <input value={last} onChange={e => setLast(e.target.value)} required />
        </label>
        <label>
          Phone Number
          <input value={phone} onChange={e => setPhone(e.target.value)} required />
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
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers.map(c => (
              <tr key={c.id}>
                <td>{c.first}</td>
                <td>{c.last}</td>
                <td>{c.phone}</td>
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
