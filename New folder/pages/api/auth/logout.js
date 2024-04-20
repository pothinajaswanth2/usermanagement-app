// Backend: pages/api/auth/logout.js
import { signOut } from 'next-auth/react';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    await signOut({ redirect: false, callbackUrl: '/' });
    res.status(200).json({ message: 'Logout successful.' });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
