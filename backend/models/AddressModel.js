const mongoose=require('mongoose')



const addressSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    street: String,
    city: String,
    state: String,
    country: String,
    postalCode: String
});

const Address = mongoose.model('Address', addressSchema);

module.exports= Address