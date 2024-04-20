// Backend: models/Tenant.js
const mongoose = require('mongoose');

const tenantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  // Add other fields as needed
});

module.exports = mongoose.model('Tenant', tenantSchema);
