"use client";
import { useState } from 'react';

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
    <div style={{ padding: '1rem' }}>
      <h1>Customer Maintenance</h1>
      <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
        <div>
          <label>
            First:&nbsp;
            <input value={first} onChange={e => setFirst(e.target.value)} required />
          </label>
        </div>
        <div>
          <label>
            Last:&nbsp;
            <input value={last} onChange={e => setLast(e.target.value)} required />
          </label>
        </div>
        <div>
          <label>
            Phone:&nbsp;
            <input value={phone} onChange={e => setPhone(e.target.value)} required />
          </label>
        </div>
        <button type="submit">{editingId === null ? 'Add' : 'Update'}</button>
        {editingId !== null && <button type="button" onClick={resetForm}>Cancel</button>}
      </form>

      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ borderBottom: '1px solid #ccc' }}>First</th>
            <th style={{ borderBottom: '1px solid #ccc' }}>Last</th>
            <th style={{ borderBottom: '1px solid #ccc' }}>Phone</th>
            <th style={{ borderBottom: '1px solid #ccc' }}>Actions</th>
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
  );
}
