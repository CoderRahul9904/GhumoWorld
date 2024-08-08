// const express=require('express')
const axios=require('axios')
const qs=require('qs')
require('dotenv').config();

console.log(process.env.AMADEUS_API_KEY)

let amadeusToken=null;
let TokenExpiringTime=null;

const GetAmadeusToken= async() =>{
    try{
        
        if(!amadeusToken || Date.now()>TokenExpiringTime){
            const requestBody = qs.stringify({
                grant_type: 'client_credentials',
                client_id: process.env.AMADEUS_API_KEY,
                client_secret: process.env.AMADEUS_SECRET_KEY
            });
            const response= await axios.post('https://test.api.amadeus.com/v1/security/oauth2/token',requestBody,{
                headers:{
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
            amadeusToken = response.data.access_token;
            TokenExpiringTime = Date.now() + response.data.expires_in * 1000;
            
            console.log("Token obtained:", amadeusToken);
        }
    }catch(err){
        console.error('Error obtaining Amadeus token:', err);
        throw new Error('Failed to obtain Amadeus token');
    }
    
}


exports.checkAmadeusToken = async (req, res, next) => {
    console.log('Here')
    try {
        if (!amadeusToken || Date.now() > TokenExpiringTime) {
            await GetAmadeusToken();
        }
        req.amadeusToken = amadeusToken;
        next();
    } catch (error) {
        console.error('Failed to obtain or refresh Amadeus token:', error);
        res.status(500).send('Failed to obtain or refresh Amadeus token');
    }
};