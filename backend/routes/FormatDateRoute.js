const express=require('express')
const FormatDateRoute=express.Router()
const { FormatDate }=require('../controllers/DateformatController')

FormatDateRoute
   .route('/format-date')
   .get(FormatDate)


module.exports = FormatDateRoute