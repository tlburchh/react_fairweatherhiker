const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const trailSchema = new Schema ({
  id: {
    type: String,
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
    type: String,
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
    type: String,
    trim: true,
  }, 
  longitude: {
    type: String,
    trim: true,
  }, 
  latitude: {
    type: String,
    trim: true,
  }

})

module.exports = mongoose.model('Trail', trailSchema)