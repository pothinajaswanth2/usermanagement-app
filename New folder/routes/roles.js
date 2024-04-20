// Backend: routes/roles.js
const express = require('express');
const router = express.Router();
const Role = require('../models/Role');

// Assign permissions to a role
router.post('/:roleId/permissions', async (req, res) => {
  try {
    const { roleId } = req.params;
    const { permissions } = req.body;
    const role = await Role.findById(roleId);
    role.permissions = permissions; // Overwrite existing permissions
    await role.save();
    res.json({ message: 'Permissions assigned successfully' });
  } catch (error) {
    res.status(400).json({ error: 'Invalid data' });
  }
});

module.exports = router;
