

const AirportDatabase=require('../models/AirportsModel')


exports.getAirportsInfo = async (req, res) => {
    try {
        const response = await AirportDatabase.find();
        if (!response) {
            return res.status(500).json({
                message: "Something went wrong, please try later"
            });
        }
        res.status(200).json({
            response,
        });
    } catch (err) {
        console.error('Error fetching airport data:', err);
        res.status(500).json({
            message: "Failed to fetch airport data"
        });
    }
};

