const mongoose=require('mongoose')

const paymentSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    booking: { type: mongoose.Schema.Types.ObjectId, ref: 'Booking' },
    amount: Number,
    paymentMethod: { type: String, enum: ['Credit Card', 'Debit Card', 'PayPal'] },
    paymentStatus: { type: String, enum: ['Completed', 'Pending', 'Failed'] },
    paymentDate: Date
});

const Payment = mongoose.model('Payment', paymentSchema);

module.exports=Payment

