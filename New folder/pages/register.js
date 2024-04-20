// Frontend: pages/register.js
import React from 'react';
import Layout from '../components/layout';
import RegisterForm from '../components/RegisterForm';

const RegisterPage = () => {
  return (
    <Layout>
      <h1>Register</h1>
      <RegisterForm />
    </Layout>
  );
};

export default RegisterPage;
