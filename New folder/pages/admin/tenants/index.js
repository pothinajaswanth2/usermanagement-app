// Frontend: pages/admin/tenants/index.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '../../../components/layout';
import TenantList from '../../../components/TenantList';

const TenantListPage = () => {
  const [tenants, setTenants] = useState([]);

  useEffect(() => {
    const fetchTenants = async () => {
      try {
        const response = await axios.get('/api/tenants');
        setTenants(response.data);
      } catch (error) {
        console.error('Error fetching tenants:', error);
        // Handle error (e.g., display error message)
      }
    };
    fetchTenants();
  }, []);

  return (
    <Layout>
      <TenantList tenants={tenants} />
    </Layout>
  );
};

export default TenantListPage;
