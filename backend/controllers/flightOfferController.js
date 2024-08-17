

const axios=require('axios')



exports.getFlightOffer=async(req,res)=>{
    const { originLocationCode,destinationLocationCode,departureDate,adults,children,infants,returnDate, currencyCode}=req.body
    const amadeusToken=req.amadeusToken;
    try{
        const response=await axios.get('https://test.api.amadeus.com/v2/shopping/flight-offers',{
            headers:{
                'Authorization': `Bearer ${amadeusToken}`
            },
            params:{
                originLocationCode,
                destinationLocationCode,
                departureDate,
                adults,
                children,
                infants,
                children,
                returnDate,
                currencyCode
            }
        })
        console.log(response.data)
        res.json(response.data);
    }catch(err){
        console.error('Error fetching flight offers:', err);
        res.status(500).send('Failed to fetch flight offers');
    }
}