// Backend: pages/api/tenants/index.js
import { getAllTenants } from '../../../services/tenant';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const tenants = await getAllTenants();
      res.status(200).json(tenants);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
