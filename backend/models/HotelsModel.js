const mongoose=require('mongoose')

const hotelSchema = new mongoose.Schema({
    name: String,
    location: String,
    address: String,
    roomTypes: [String],
    roomAvailability: Number,
    amenities: [String],
    price: Number,
    rating: Number,
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }]
});

const Hotel = mongoose.model('Hotel', hotelSchema);

module.exports= Hotel