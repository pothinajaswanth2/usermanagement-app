// Backend: models/Permission.js
const mongoose = require('mongoose');

const permissionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  // Add other fields as needed
});

module.exports = mongoose.model('Permission', permissionSchema);
