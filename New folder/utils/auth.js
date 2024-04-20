// utils/auth.js

export async function signIn(email, password) {
    try {
      // Call your backend API route to handle user sign-in
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (response.ok) {
        const user = await response.json();
        // Set user information in local storage or session storage
        localStorage.setItem('user', JSON.stringify(user));
        return user;
      } else {
        throw new Error('Failed to sign in');
      }
    } catch (error) {
      console.error('Sign-in error:', error);
      throw error;
    }
  }
  
  export async function signOut() {
    // Remove user information from local storage or session storage
    localStorage.removeItem('user');
    // Call your backend API route to handle user sign-out
    await fetch('/api/auth/logout', {
      method: 'POST',
    });
  }
  
  export function getUser() {
    // Get user information from local storage or session storage
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }
  
  export function isAuthenticated() {
    // Check if user is authenticated
    return !!localStorage.getItem('user');
  }
  