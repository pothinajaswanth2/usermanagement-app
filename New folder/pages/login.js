// Frontend: pages/login.js
import React from 'react';
import Layout from '../components/layout';
import LoginForm from '../components/LoginForm';

const LoginPage = () => {
  return (
    <Layout>
      <h1>Login</h1>
      <LoginForm />
    </Layout>
  );
};

export default LoginPage;
