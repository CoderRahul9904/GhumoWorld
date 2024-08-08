const mongoose=require('mongoose')

const flightSchema = new mongoose.Schema({
    airline: String,
    flightNumber: String,
    departureAirport: String,
    arrivalAirport: String,
    departureTime: Date,
    arrivalTime: Date,
    duration: String,
    seatAvailability: Number,
    price: Number,
    class: { type: String, enum: ['Economy', 'Business'] }
});

const Flight = mongoose.model('Flight', flightSchema);

module.exports = Flight