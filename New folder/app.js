// Backend: app.js
const express = require('express');
const mongoose = require('mongoose');
const tenantsRouter = require('./routes/tenants');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/my_next_auth_app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware
app.use(express.json());

// Routes
app.use('/api/tenants', tenantsRouter);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
