const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  eventType: {
    type: String,
    required: true,
    index: true
  },
  userId: {
    type: String,
    required: true,
    index: true
  },
  timestamp: {
    type: Date,
    required: true,
    index: true
  },
  value: {
    type: Number
  }
});

// Compound index
EventSchema.index({ userId: 1, timestamp: 1 });

module.exports = mongoose.model("Event", EventSchema);
