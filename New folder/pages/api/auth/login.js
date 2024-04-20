// Backend: pages/api/auth/login.js
import { loginUser } from '../../../services/auth';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { email, password } = req.body;
      const token = await loginUser(email, password);
      res.status(200).json({ token });
    } catch (error) {
      res.status(401).json({ error: error.message });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
