const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const trailSchema = new Schema ({
  id: {
    type: Number,
    trim: true,
  },
  name: {
    type: String,
    trim: true,
  },
  summary: {
    type: String,
    trim: true,
  },
  difficulty: {
    type: String,
    trim: true,
  },
  stars: {
    type: Number,
    trim: true,
  }, 
  location: {
    type: String,
    trim: true,
  }, 
  url: {
    type: String,
    trim: true,
  }, 
  imgMedium: {
    type: String,
    trim: true,
  }, 
  length: {
    type: Number,
    trim: true,
  }, 
  longitude: {
    type: Number,
    trim: true,
  }, 
  latitude: {
    type: Number,
    trim: true,
  }

})

module.exports = mongoose.model('Trail', trailSchema)