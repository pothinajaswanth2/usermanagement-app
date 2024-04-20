// Backend: pages/api/tenants/create.js
import { createTenant } from '../../../services/tenant';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { name, description } = req.body;
      await createTenant(name, description);
      res.status(201).json({ message: 'Tenant created successfully.' });
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
