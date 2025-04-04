const mongoose = require('mongoose');

const TeamMemberSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  image: { type: String, required: true },
  bio: { type: String },
  socialLinks: {
    linkedin: { type: String },
    twitter: { type: String },
    github: { type: String }
  }
}, { timestamps: true });

module.exports = mongoose.model('TeamMember', TeamMemberSchema);
