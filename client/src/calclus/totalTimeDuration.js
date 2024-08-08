export default function CalculateTotalTimeDurationOfJourney(Array_arrivalTime,Array_departureTime){
    
    const AM_PM_conversion= (Array_arrivalTime[2] !== Array_departureTime[2])

    const [HoursArrival,MintuesArrival]=Array_arrivalTime[1].split(':').map(Number);
    const [HoursDeparture,MintuesDeparture]=Array_departureTime[1].split(':').map(Number);

    const totalArrivalMintues=HoursArrival*60 + MintuesArrival;
    const totalDepartureMintues=HoursDeparture*60 + MintuesDeparture;

    let diffTotalMinutesDestination=totalArrivalMintues-totalDepartureMintues
    const checkForMinus=diffTotalMinutesDestination
    if (diffTotalMinutesDestination < 0) {
        diffTotalMinutesDestination += 24 * 60;
    }

    let destinationInHoursInitial=(Math.floor(diffTotalMinutesDestination/60))
    if(checkForMinus >0 && AM_PM_conversion){
        destinationInHoursInitial+=12
    }
    let destinationInHours=destinationInHoursInitial.toString()
    let destinationInMinutes= (diffTotalMinutesDestination % 60).toString()

    return {
        destinationInHours,destinationInMinutes
    }
}
