// Backend: models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  roles: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Role' }],
  // Add other fields as needed
});

module.exports = mongoose.model('User', userSchema);
