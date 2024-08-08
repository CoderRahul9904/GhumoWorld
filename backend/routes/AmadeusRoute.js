const express=require('express')
const AmadeusRoute=express.Router()
const { checkAmadeusToken }=require('../controllers/amadeusController')
const { getFlightOffer }=require('../controllers/flightOfferController')


AmadeusRoute
    .route('/flight-offers')
    .post(checkAmadeusToken,getFlightOffer)

module.exports = AmadeusRoute;