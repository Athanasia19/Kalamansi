const mongoose = require("mongoose");

const plantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  water: {
    type: String,
    required: true,
  },
  soil: {
    type: String,
    required: true,
  },
  humidity: {
    type: String,
    required: true,
  },
  light: {
    type: String,
    required: true,
  },
  temperature: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Plant", plantSchema);
