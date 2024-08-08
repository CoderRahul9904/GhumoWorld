import FlightContainer from "./FlightContainer";
import FlightInfoContainer from "./FlightInfoContainer";
import PropTypes from "prop-types";
import { useSelector} from "react-redux";
import { format } from "date-fns"
import CalculateTotalTimeDurationOfJourney from "../calclus/totalTimeDuration";
const FlightCardsContainer = ({ className = "" }) => {

  
  const AvailableFlightsData=useSelector((state) => state.flight)
  const AllFlights=AvailableFlightsData.AvailableFlights
  console.log(AllFlights)

  // if(AvailableFlightsData.AvailableFlights){
  //   console.log(AvailableFlightsData.AvailableFlights)
  // }else{
  //   console.log(" Yet, not Fetched")
  // }
  const capitalizeString=(str)=>{
    if(str.length == 0) return;
    return str.split(' ').map(ele => ele[0].toUpperCase() + ele.slice(1).toLowerCase()).join(' ');
  }

  return (
    <>
    <div
      className={`flex flex-col items-start justify-start gap-[9px] text-left text-base text-dimgray-200 font-roboto ${className}`}
    >
      <div>
      {AllFlights ? <div>
      {AllFlights.data.slice(0, 7).map((flight, id) => {

          //Arrival Time Logic
          const segmentLength=flight.itineraries[0].segments.length
          const arrivalTimeString=flight.itineraries[0].segments[segmentLength-1].arrival.at
          const arrivalTimeDateObject= new Date(arrivalTimeString)
          let arrivalTime;
          let Array_arrivalTime;
          if(arrivalTimeString){
            Array_arrivalTime=format(arrivalTimeDateObject,'dd h:mm a').split(' ')
            arrivalTime=Array_arrivalTime[1]+ ' ' + Array_arrivalTime[2]
          } 
          
          //Depature Time Logic
          const departureTimeString=flight.itineraries[0].segments[0].departure.at
          const departureTimeDateObject= new Date(departureTimeString)
          let departureTime;
          let Array_departureTime;
          if(departureTimeString){
            Array_departureTime=format(departureTimeDateObject,'dd h:mm a').split(' ')
            departureTime=Array_departureTime[1]+ ' ' + Array_departureTime[2]
          } 
          //Carrier Code Logic
          const carrierCode = flight.itineraries[0].segments[0].carrierCode;
          const airlineEntry = Object.entries(AllFlights.dictionaries.carriers).find(
            ([code]) => code === carrierCode
          );
          const airlineName = airlineEntry ? capitalizeString(airlineEntry[1]) : "Unknown Airline";

          //IataCode Arrival
          const iatacodeArrival=flight.itineraries[0].segments[segmentLength-1].arrival.iataCode
          

          //IataCode Departure
          const iatacodeDeparture=flight.itineraries[0].segments[0].departure.iataCode

          //Number of Stopes
          const no_of_stops=segmentLength


          //Total Time Duration for destination Logic
          const destinationInHourAndMintues=CalculateTotalTimeDurationOfJourney(Array_arrivalTime,Array_departureTime)
          const destinationInHours=destinationInHourAndMintues.destinationInHours
          const destinationInMintues=destinationInHourAndMintues.destinationInMinutes

          return (
            
              <FlightInfoContainer
                flightDetails="/sia.svg"
                airlineName={airlineName}
                departureTime={departureTime}
                flightDuration={`${destinationInHours}H ${destinationInMintues}M, ${no_of_stops} stop`}
                arrivalTime={arrivalTime}
                flightPrice="S$ 900"
                iatacodeArrival={iatacodeArrival}
                iatacodeDeparture={iatacodeDeparture}
              />
            
         );
      })}
      </div> :
      <div>
      <FlightContainer
        flightDetails="/turkish.svg"
        airlineName="Turkish Airlines"
        departureTime="11:35 PM"
        flightNumber="/flighticon.svg"
        flightDuration="33H 10M, 1-stop"
        arrivalTime="4:45 PM"
        flightPrice="S$ 723"
      />
      <FlightInfoContainer
        flightDetails="/sia.svg"
        airlineName="Singapore Airlines"
        departureTime="8:45 PM"
        flightDuration="15H 10M, 2-stops"
        arrivalTime="7:55 PM"
        flightPrice="S$ 900"
      />
      <FlightContainer
        flightDetails="/japan.svg"
        airlineName="Japan Airlines"
        departureTime="8:20 PM"
        flightNumber="/flighticon1.svg"
        flightDuration="17H 30M, 1-stop"
        arrivalTime="9:50 PM"
        flightPrice="S$ 859"
      />
      <FlightContainer
        flightDetails="/ana.svg"
        airlineName="ANA"
        departureTime="6:35 PM"
        flightNumber="/flighticon1.svg"
        flightDuration="19H 15M, 1-stop"
        arrivalTime="9:50 PM"
        flightPrice="S$ 936"
      />
      <FlightContainer
        flightDetails="/americanairlines.svg"
        airlineName="American Airlines"
        departureTime="8:20 PM"
        flightNumber="/flighticon1.svg"
        flightDuration="17H 30M, 1-stop"
        arrivalTime="9:50 AM"
        flightPrice="S$ 939"
      />
      <FlightInfoContainer
        flightDetails="/turkish.svg"
        airlineName="Turkish Airlines"
        departureTime="11:35 PM"
        flightDuration="33H 10M, 2-stops"
        arrivalTime="4:45 PM"
        flightPrice="S$ 673"
      />
      <FlightContainer
        flightDetails="/japan1.svg"
        airlineName="Japan Airlines"
        departureTime="10:25 PM"
        flightNumber="/flighticon1.svg"
        flightDuration="26H 45M, 1-stop"
        arrivalTime="9:10 AM"
        flightPrice="S$ 859"
      />
      <FlightContainer
        flightDetails="/americanairlines1.svg"
        airlineName="American Airlines"
        departureTime="10:25 PM"
        flightNumber="/flighticon1.svg"
        flightDuration="26H 45M, 1-stop"
        arrivalTime="9:10 AM"
        flightPrice="S$ 859"
      /></div>}
      <button className="cursor-pointer [border:none] sm:justify-center p-0 bg-[transparent] relative w-[220px] h-[72px]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-cornflowerblue-200" />
        <div className="absolute top-[calc(50%_-_10.5px)] left-[calc(50%_-_81.5px)] text-lg tracking-[0.04em] font-medium font-roboto text-white text-center">
          Show more results
        </div>
      </button> 
      </div>
    </div>
    </>
  );
};

FlightCardsContainer.propTypes = {
  className: PropTypes.string,
};

export default FlightCardsContainer;
