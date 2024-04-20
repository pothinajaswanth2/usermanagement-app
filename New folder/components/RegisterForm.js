// Frontend: components/RegisterForm.js
// Frontend: components/RegisterForm.js
import React, { useState } from 'react';
import axios from 'axios';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make a POST request to register endpoint
      const response = await axios.post('/api/auth/register', { email, password });
      console.log('Registration successful:', response.data);
      // Redirect to login page or dashboard upon successful registration
    } catch (error) {
      console.error('Registration failed:', error.response.data.error);
      // Handle registration error (e.g., display error message)
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
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
