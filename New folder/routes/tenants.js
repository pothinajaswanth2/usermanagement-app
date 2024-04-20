// Backend: routes/tenants.js
const express = require('express');
const router = express.Router();
const Tenant = require('../models/Tenant');

// Get all tenants
router.get('/', async (req, res) => {
  try {
    const tenants = await Tenant.find();
    res.json(tenants);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Create a new tenant
router.post('/', async (req, res) => {
  try {
    const { name, description } = req.body;
    const newTenant = new Tenant({ name, description });
    await newTenant.save();
    res.status(201).json(newTenant);
  } catch (error) {
    res.status(400).json({ error: 'Invalid data' });
  }
});

// Update a tenant
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;
    const updatedTenant = await Tenant.findByIdAndUpdate(id, { name, description }, { new: true });
    res.json(updatedTenant);
  } catch (error) {
    res.status(400).json({ error: 'Invalid data' });
  }
});

// Delete a tenant
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Tenant.findByIdAndDelete(id);
    res.json({ message: 'Tenant deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: 'Invalid data' });
  }
});

module.exports = router;
