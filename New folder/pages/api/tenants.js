// Backend: pages/api/tenants.js
import db from '../../utils/db';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Handle POST request to create a new tenant
    const { name, description } = req.body;
    // Perform database operations to create a new tenant
    // Example: db.createTenant(name, description);
    res.status(201).json({ message: 'Tenant created successfully' });
  } else if (req.method === 'GET') {
    // Handle GET request to fetch all tenants
    // Example: const tenants = await db.getAllTenants();
    // Return fetched tenants as JSON response
    res.status(200).json({ tenants });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
