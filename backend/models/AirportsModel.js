
const mongoose=require('mongoose')
const {airportDB}=require('../db')


const AirportSchema= new mongoose.Schema({
    name: String,
    iso_country: String,
    iata_code: String,
    type: String,
})


const AirportDatabase = airportDB.model('Airports', AirportSchema, 'Airports');

module.exports= AirportDatabase