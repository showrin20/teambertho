const mongoose = require('mongoose');

const TestimonialSchema = new mongoose.Schema({
  name: { type: String, required: true },
  message: { type: String, required: true },
  image: { type: String, required: true },
  designation: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Testimonial', TestimonialSchema);
