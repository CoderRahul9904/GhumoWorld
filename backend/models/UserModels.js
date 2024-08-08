const mongoose=require('mongoose')
const {userDB} =require('../db')
const UserSchema= new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    given_name:String,
    family_name: String,
    phoneNumber: String,
    picture: String,
    address: String,
    dateOfBirth: Date,
    role: { type: String, enum: ['Admin', 'Customer'], default: 'Customer' },
    bookingHistory: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Booking' }],
})


const User=userDB.model('UserInfo',UserSchema,'UserInfo')

module.exports=User