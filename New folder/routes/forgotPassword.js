// Backend: routes/forgotPassword.js
const express = require('express');
const router = express.Router();
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const User = require('../models/user');

// Request password reset link
router.post('/', async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    const token = crypto.randomBytes(20).toString('hex');
    user.resetPasswordToken = token;
    user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
    await user.save();

    // Send email with reset link
    const transporter = nodemailer.createTransport({
      // Configure email server settings
    });
    const mailOptions = {
      // Configure email content and recipient
    };
    await transporter.sendMail(mailOptions);
    res.json({ message: 'Password reset link sent successfully' });
  } catch (error) {
    console.error('Error requesting password reset:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
