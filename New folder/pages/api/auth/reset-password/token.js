// Frontend: pages/reset-password/[token].js
import { useState } from 'react';
import axios from 'axios';

const ResetPasswordPage = ({ token }) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      await axios.post(`/api/reset-password/${token}`, { password });
      // Handle successful password reset (e.g., redirect to login page)
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div>
      <h1>Reset Password</h1>
      <form onSubmit={handleSubmit}>
        {/* Password input fields and submit button */}
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default ResetPasswordPage;
