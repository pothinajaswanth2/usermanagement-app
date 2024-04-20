// Frontend: pages/forgot-password.js
import React from 'react';
import Layout from '../components/layout';
import ForgotPasswordForm from '../components/ForgotPasswordForm';

const ForgotPasswordPage = () => {
  return (
    <Layout>
      <h1>Forgot Password</h1>
      <ForgotPasswordForm />
    </Layout>
  );
};

export default ForgotPasswordPage;
