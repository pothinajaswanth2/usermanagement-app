// Backend: middleware/auth.js
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const authenticateUser = async (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];
  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decodedToken.userId);
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
};

module.exports = authenticateUser;
