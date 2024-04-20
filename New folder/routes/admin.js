// Backend: routes/admin.js
const express = require('express');
const router = express.Router();
const authenticateUser = require('../middleware/auth');
const authorizeUser = require('../middleware/authorize');

router.get('/admin/resource', authenticateUser, authorizeUser(['admin']), (req, res) => {
  // Logic to handle resource with specific role requirement
});

module.exports = router;
