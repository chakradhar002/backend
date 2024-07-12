const express = require('express');
const router = express.Router();
const db = require('./db');

// POST route to handle form submissions
router.post('/contact', async (req, res) => {
  const { phone, city, email, queryDetails } = req.body;
  const timestamp = new Date();

  if (!phone || !city || !email || !queryDetails) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const [result] = await db.execute(
      'INSERT INTO contact_form (phone, city, email, queryDetails, timestamp) VALUES (?, ?, ?, ?, ?)',
      [phone, city, email, queryDetails, timestamp]
    );
    res.status(201).json({ message: 'Form submitted successfully', id: result.insertId });
  } catch (error) {
    res.status(500).json({ error: 'Database error', details: error.message });
  }
});

module.exports = router;
