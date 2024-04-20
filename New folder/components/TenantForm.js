// Frontend: components/TenantForm.js
import React, { useState } from 'react';
import axios from 'axios';

const TenantForm = ({ initialTenant, onSubmit }) => {
  const [name, setName] = useState(initialTenant ? initialTenant.name : '');
  const [description, setDescription] = useState(initialTenant ? initialTenant.description : '');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTenant = {
      name,
      description,
    };
    onSubmit(newTenant);
  };

  return (
    <div>
      <h2>{initialTenant ? 'Edit Tenant' : 'Create New Tenant'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit">{initialTenant ? 'Update Tenant' : 'Create Tenant'}</button>
      </form>
    </div>
  );
};

export default TenantForm;
