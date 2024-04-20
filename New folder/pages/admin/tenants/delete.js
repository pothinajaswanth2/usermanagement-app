// Frontend: pages/admin/tenants/delete.js
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Layout from '../../../components/layout';

const DeleteTenantPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [tenant, setTenant] = useState(null);

  useEffect(() => {
    const fetchTenant = async () => {
      try {
        const response = await axios.get(`/api/tenants/${id}`);
        setTenant(response.data);
      } catch (error) {
        console.error('Error fetching tenant:', error);
        // Handle error (e.g., display error message)
      }
    };
    if (id) {
      fetchTenant();
    }
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/tenants/${id}`);
      // Handle successful deletion (e.g., redirect to tenant list page)
    } catch (error) {
      console.error('Error deleting tenant:', error);
      // Handle error (e.g., display error message)
    }
  };

  return (
    <Layout>
      <h1>Delete Tenant</h1>
      {tenant && (
        <div>
          <p>Are you sure you want to delete the tenant: {tenant.name}?</p>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </Layout>
  );
};

export default DeleteTenantPage;
