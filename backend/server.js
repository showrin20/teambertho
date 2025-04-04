const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const projectRoutes = require('./routes/projectRoutes');
const teamRoutes = require('./routes/teamRoutes');
const testimonialRoutes = require('./routes/testimonialRoutes');

// Use routes
app.use('/api/projects', projectRoutes);
app.use('/api/team-members', teamRoutes);
app.use('/api/testimonials', testimonialRoutes);

require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.get('/', (req, res) => {
  res.send('API Running');
});

// Endpoint to upload an image
app.post('/api/upload', upload.single('image'), async (req, res) => {
  try {
    const image = new Image({
      url: `http://localhost:${port}/uploads/${req.file.filename}`,
      title: req.body.title, // Get the title from the request body
    });
    await image.save();
    res.status(201).json(image);
  } catch (error) {
    res.status(500).json({ message: 'Failed to upload image' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
