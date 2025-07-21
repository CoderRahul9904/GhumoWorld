const express = require('express');
const app = express();
const AuthRoute = require('./routes/AuthRoute');
const AmadeusRoute = require('./routes/AmadeusRoute');
const AirportsRoute = require('./routes/AirportsRoute'); 
const FormatDateRoute=require('./routes/FormatDateRoute')


const cors = require('cors');

app.use(express.json());
app.use(cors({ origin: '*' }));
app.options('*', cors());

app.use((req, res, next) => {
  res.setHeader('Cross-Origin-Opener-Policy', 'same-origin-allow-popups');
  next();
});

app.use('/api/v1/GhumoWorld', AuthRoute);
app.use('/api/v1/GhumoWorld', FormatDateRoute);
app.use('/api/v1/amadeus', AmadeusRoute);
app.use('/api/v1/GhumoWorld/airports', AirportsRoute); 

module.exports = app;