const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: '../client/configure.env' });


const DB = process.env.DB.replace('<password>', process.env.DB_PASS);
const DB_Airport = process.env.DB_Airport.replace('<password>', process.env.DB_PASS);


const userDB = mongoose.createConnection(DB);
const airportDB = mongoose.createConnection(DB_Airport);


userDB.on('connected', () => {
    console.log('Connected to User database');
});

airportDB.on('connected', () => {
    console.log('Connected to Airport_Database');
});


userDB.on('error', (err) => {
    console.error('Error connecting to User database:', err);
});

airportDB.on('error', (err) => {
    console.error('Error connecting to Airport_Database:', err);
});

module.exports = {
    userDB,
    airportDB,
};
