const express=require('express')
const AuthRoute=express.Router()
const AuthVerification=require('../controllers/authController')


AuthRoute
    .route('/get-info')
    .post(AuthVerification.Auth_Verification)


AuthRoute
    .route('/profile')
    .get(AuthVerification.verification,AuthVerification.Profile)





module.exports=AuthRoute