const express = require('express');
const app = express();
const AuthRoute = require('./routes/AuthRoute');
const AmadeusRoute = require('./routes/AmadeusRoute');
const AirportsRoute = require('./routes/AirportsRoute'); 
const FormatDateRoute=require('./routes/FormatDateRoute')

const dotenv = require('dotenv');
dotenv.config({ path: '../client/configure.env' });

const cors = require('cors');

app.use(express.json());
app.use(cors());

app.use('/api/v1/GhumoWorld', AuthRoute);
app.use('/api/v1/GhumoWorld', FormatDateRoute);
app.use('/api/v1/amadeus', AmadeusRoute);
app.use('/api/v1/GhumoWorld/airports', AirportsRoute); 

module.exports = app;