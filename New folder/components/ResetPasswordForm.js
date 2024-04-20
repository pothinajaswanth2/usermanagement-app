// Frontend: components/ResetPasswordForm.js
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const ResetPasswordForm = ({ token }) => {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make a POST request to reset password endpoint
      const response = await axios.post(`/api/auth/reset-password/${token}`, { password });
      console.log('Password reset successful:', response.data);
      // Redirect to login page or display success message upon successful password reset
    } catch (error) {
      console.error('Error resetting password:', error.response.data.error);
      // Handle error (e.g., display error message)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="password">New Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Reset Password</button>
    </form>
  );
};

export default ResetPasswordForm;
