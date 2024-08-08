

const axios=require('axios')



exports.getFlightOffer=async(req,res)=>{
    const { originLocationCode,destinationLocationCode,departureDate}=req.body
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
                adults: 1,
            }
        })
        console.log(response.data)
        res.json(response.data);
    }catch(err){
        console.error('Error fetching flight offers:', err);
        res.status(500).send('Failed to fetch flight offers');
    }
}