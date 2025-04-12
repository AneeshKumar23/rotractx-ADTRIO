const mongoose = require('mongoose');
const { Schema } = mongoose;

const bookingSchema = new Schema({
  pickupDateTime: {
    type: Date,
    required: true
  },
  dropoffDateTime: {
    type: Date,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true,
    match: /^[0-9]{10}$/
  },
  aadharNumber: {
    type: String,
    required: true,
    match: /^[0-9]{12}$/
  },
  address: {
    type: String,
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Booking', bookingSchema);
