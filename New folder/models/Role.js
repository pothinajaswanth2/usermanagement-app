// Backend: models/Role.js
const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  permissions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Permission' }],
  // Add other fields as needed
});

module.exports = mongoose.model('Role', roleSchema);
