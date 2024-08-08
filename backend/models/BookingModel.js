const mongoose=require('mongoose')


const bookingSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    flight: { type: mongoose.Schema.Types.ObjectId, ref: 'Flight' },
    hotel: { type: mongoose.Schema.Types.ObjectId, ref: 'Hotel' },
    bookingDate: Date,
    status: { type: String, enum: ['Confirmed', 'Pending', 'Canceled'] },
    paymentDetails: { type: mongoose.Schema.Types.ObjectId, ref: 'Payment' },
    totalAmount: Number
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports= Booking
