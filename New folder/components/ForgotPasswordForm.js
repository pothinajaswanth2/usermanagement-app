// Frontend: components/ForgotPasswordForm.js
import React, { useState } from 'react';
import axios from 'axios';

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make a POST request to forgot password endpoint
      const response = await axios.post('/api/auth/forgot-password', { email });
      console.log('Password reset email sent:', response.data);
      // Redirect to login page or display success message upon email sent
    } catch (error) {
      console.error('Error sending password reset email:', error.response.data.error);
      // Handle error (e.g., display error message)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <button type="submit">Reset Password</button>
    </form>
  );
};

export default ForgotPasswordForm;
