const mongoose = require("mongoose");

const qualitySchema = new mongoose.Schema({
  characteristics: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Quality", qualitySchema);
