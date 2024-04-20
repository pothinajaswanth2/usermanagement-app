
import { registerUser } from '../../../services/auth';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { email, password } = req.body;
      await registerUser(email, password);
      res.status(200).json({ message: 'User registered successfully.' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
