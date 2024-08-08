const express=require('express')
const AirportsRoute=express.Router()

const {getAirportsInfo}=require('../controllers/AirportsController')


AirportsRoute
    .route('/get-airports')
    .get(getAirportsInfo)




module.exports=AirportsRoute