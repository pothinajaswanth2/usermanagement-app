// Frontend: pages/admin/tenants/edit.js
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Layout from '../../../components/layout';
import TenantForm from '../../../components/TenantForm';

const EditTenantPage = () => {
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

  const handleUpdate = async (updatedTenant) => {
    try {
      await axios.put(`/api/tenants/${id}`, updatedTenant);
      // Handle successful update (e.g., redirect to tenant list page)
    } catch (error) {
      console.error('Error updating tenant:', error);
      // Handle error (e.g., display error message)
    }
  };

  return (
    <Layout>
      <h1>Edit Tenant</h1>
      {tenant && <TenantForm initialTenant={tenant} onSubmit={handleUpdate} />}
    </Layout>
  );
};

export default EditTenantPage;
