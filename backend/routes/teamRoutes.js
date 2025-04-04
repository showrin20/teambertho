const express = require('express');
const router = express.Router();
const TeamMember = require('../models/TeamMember');

// GET all team members
router.get('/', async (req, res) => {
  try {
    const teamMembers = await TeamMember.find();
    res.json(teamMembers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
