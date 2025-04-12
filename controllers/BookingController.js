const Booking = require('../models/Booking');

// Get all bookings
const index = (req, res, next) => {
  Booking.find()
    .then(response => {
      res.json({ response });
    })
    .catch(error => {
      res.json({ message: 'An error occurred while fetching bookings!' });
    });
};

// Get a single booking by ID
const show = (req, res, next) => {
  const bookingId = req.body.bookingId;

  Booking.findById(bookingId)
    .then(response => {
      res.json({ response });
    })
    .catch(error => {
      res.json({ message: 'An error occurred while fetching the booking!' });
    });
};

// Create a new booking
const store = (req, res, next) => {
  const booking = new Booking({
    pickupDateTime: req.body.pickupDateTime,
    dropoffDateTime: req.body.dropoffDateTime,
    phoneNumber: req.body.phoneNumber,
    aadharNumber: req.body.aadharNumber,
    address: req.body.address
  });

  booking.save()
    .then(() => {
      res.json({ message: 'Booking confirmed successfully!' });
    })
    .catch(error => {
      res.json({ message: 'Error while confirming booking!', error });
    });
};

// Update an existing booking
const update = (req, res, next) => {
  const bookingId = req.body.bookingId;

  const updatedData = {
    pickupDateTime: req.body.pickupDateTime,
    dropoffDateTime: req.body.dropoffDateTime,
    phoneNumber: req.body.phoneNumber,
    aadharNumber: req.body.aadharNumber,
    address: req.body.address
  };

  Booking.findByIdAndUpdate(bookingId, { $set: updatedData })
    .then(() => {
      res.json({ message: 'Booking updated successfully!' });
    })
    .catch(error => {
      res.json({ message: 'Error while updating booking!', error });
    });
};

// Delete a booking
const destroy = (req, res, next) => {
  const bookingId = req.body.bookingId;

  Booking.findByIdAndRemove(bookingId)
    .then(() => {
      res.json({ message: 'Booking deleted successfully!' });
    })
    .catch(error => {
      res.json({ message: 'Error while deleting booking!', error });
    });
};

module.exports = {
  index,
  store,
  show,
  update,
  destroy
};