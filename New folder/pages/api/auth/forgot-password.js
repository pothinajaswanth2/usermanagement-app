// Backend: pages/api/auth/forgot-password.js
import { sendPasswordResetEmail } from '../../../services/auth';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { email } = req.body;
      await sendPasswordResetEmail(email);
      res.status(200).json({ message: 'Password reset email sent.' });
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
