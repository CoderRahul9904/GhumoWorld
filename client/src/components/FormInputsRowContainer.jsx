import { useState, useMemo, useCallback, useEffect } from "react";
import axios from 'axios'
import { Autocomplete, TextField, Icon } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useNavigate } from "react-router-dom";
import PropTypes, { string } from "prop-types";
import { fetchedFlight } from "../slices/flightSlice";
import PassengerClassSelector from "./TravellersClass";
import { useDispatch } from "react-redux";
const FormInputsRowContainer = ({
  className = "",
  propBorderRadius,
  propBackgroundColor,
  propPadding,
  onSearchTextClick,
}) => {
  const dispatch=useDispatch()


  const [ AirportsData, SetAirportData]=useState([])
  const getAirports = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/v1/GhumoWorld/airports/get-airports');
      SetAirportData(response.data.response)
    } catch (err) {
      console.error('Error fetching airports:', err);
      // setError('Error fetching airports');
    }
  };

  useEffect(() => {
    getAirports();
  }, []);

  const options = AirportsData.map(airport => ({
    label: `${airport.name} (${airport.iata_code})`,
  }));

  const [selectedArrivalOption,SetselectedArrivalOption]=useState(
    localStorage.getItem('selectedArrivalOption') || ''
  );
  const [selectedDepartureOption,SetselectedDepartureOption]=useState(
    localStorage.getItem('selectedDepartureOption') || ''
  );

  const handleArrivalChange=(event,newValue)=>{
    SetselectedArrivalOption(newValue)
    console.log(selectedArrivalOption)
  }
  const handleDepartureChange=(event,newValue)=>{
    SetselectedDepartureOption(newValue)
    console.log(selectedDepartureOption)
  }
  
  

  useEffect(() => {
    if(selectedArrivalOption && typeof selectedArrivalOption !== 'string'){
      localStorage.setItem('selectedArrivalOption', selectedArrivalOption.label);
    }else if( selectedArrivalOption == null){
      localStorage.setItem('selectedArrivalOption', '');
    }
  }, [selectedArrivalOption]);

  useEffect(() => {
    if(selectedDepartureOption && typeof selectedDepartureOption !== 'string'){
      localStorage.setItem('selectedDepartureOption', selectedDepartureOption.label);
    }else if( selectedDepartureOption == null){
      localStorage.setItem('selectedDepartureOption', '');
    }
    
  }, [selectedDepartureOption]);


  const [
    selectOutlinedDateTimePickerValue,
    setSelectOutlinedDateTimePickerValue,
  ] = useState();


  
  const formInputsRowStyle = useMemo(() => {
    return {
      borderRadius: propBorderRadius,
      backgroundColor: propBackgroundColor,
      padding: propPadding,
    };
  }, [propBorderRadius, propBackgroundColor, propPadding]);

  const navigate = useNavigate();

  const onSearchFlightsButtonClick = async () => {
    
    const originLocationCode = selectedDepartureOption.match(/\(([^)]+)\)/)[1];
    console.log(originLocationCode)

    const destinationLocationCode= selectedArrivalOption.match(/\(([^)]+)\)/)[1];
    console.log(destinationLocationCode)
    

    console.log(selectOutlinedDateTimePickerValue)
    console.log(selectOutlinedDateTimePickerValue.formattedDate)
    const departureDate = selectOutlinedDateTimePickerValue.formattedDate;
    console.log(departureDate)
    try{
      const response= await axios.post('http://localhost:3000/api/v1/amadeus/flight-offers',{
        originLocationCode: originLocationCode,
        destinationLocationCode: destinationLocationCode,
        departureDate: departureDate,
    })
    console.log(response.data)
    dispatch(fetchedFlight({AvailableFlights: response.data}))
    }catch(err){
      console.error('Error fetching flight offers:', err.message);
    }
    
    navigate("/results-page");
  }


  const handleDatePickerChange = async(newValue)=>{
    const response= await axios.get('http://localhost:3000/api/v1/GhumoWorld/format-date',{
      params:{
        dateObj: newValue
      }
    })
    if(!response){
      console.log("Something went wrong")
    }
    setSelectOutlinedDateTimePickerValue(response.data)
    console.log(response.data)
  }

  if(selectOutlinedDateTimePickerValue){
    console.log("Here is :" + selectOutlinedDateTimePickerValue)
  }




  console.log("Arrival Airport : "+selectedArrivalOption)
  console.log("Departure Airport : "+selectedDepartureOption)
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div
        className={`self-stretch flex flex-row items-start justify-start md:flex-col ${className}`}
        style={formInputsRowStyle}
      >
        <div className="flex flex-row items-start justify-start md:w-full sm:flex-col">
          <div className="flex-1 flex flex-col items-center justify-center p-[5px] sm:w-full sm:flex-[unset] sm:self-stretch">
            <Autocomplete
              className="self-stretch"
              size="medium"
              sx={{ width: "100%" }}
              disablePortal
              options={
                options
              }
              value={selectedDepartureOption}
              onChange={handleDepartureChange}
              renderInput={(params) => (
                <TextField
                  {...params}
                  color="primary"
                  label="Departure"
                  variant="outlined"
                  placeholder=""
                  helperText=""
                />
              )}
              // defaultValue="Singapore -  Changi (SIN)"
            />
          </div>
          <div className="flex-1 flex flex-col items-center justify-center p-[5px] sm:w-full sm:flex-[unset] sm:self-stretch">
            <Autocomplete
              className="self-stretch"
              size="medium"
              sx={{ width: "100%" }}
              disablePortal
              options={options}
              value={selectedArrivalOption}
              onChange={handleArrivalChange}
              renderInput={(params) => (
                <TextField
                  {...params}
                  color="primary"
                  label="Arrival"
                  variant="outlined"
                  placeholder=""
                  helperText=""
                />
              )}
              
            />
          </div>
          <div className="flex-1 flex flex-col items-center justify-center p-[5px] sm:w-full sm:flex-[unset] sm:self-stretch">
            <div className="self-stretch">
              <DatePicker
                className="self-stretch"
                label="Departure Date"
                value={selectOutlinedDateTimePickerValue || "MM-DD-YYYY"}
                onChange={(newValue) => {
                  handleDatePickerChange(newValue)
                }}
                sx={{ width: "100%" }}
                slotProps={{
                  textField: {
                    variant: "outlined",
                    size: "medium",
                    fullWidth: true,
                    required: false,
                    autoFocus: false,
                    error: false,
                    color: "primary",
                    placeholder: "Date",
                  },
                }}
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center p-[5px] md:w-full md:text-left">
            <button
            className="cursor-pointer [border:none] p-0 bg-orange-200 rounded w-[164px] h-14 overflow-hidden flex flex-col items-center justify-center [transition:0.3s] hover:bg-darkorange md:mr-[auto] sm:w-[100%!important]"
            onClick={onSearchFlightsButtonClick}
            >
            <div className="relative text-mini tracking-[0.46px] leading-[26px] uppercase font-medium font-roboto text-white text-center inline-block w-[147px]">
              Search flights
            </div>
            </button>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center p-[5px] sm:w-full sm:flex-[unset] sm:self-stretch">
            <div className="self-stretch">
            <DatePicker
              className="self-stretch"
              label="Return Date"
              value={"MM-DD-YYYY"}
              sx={{ width: "100%" }}
              slotProps={{
                textField: {
                  variant: "outlined",
                  size: "medium",
                  fullWidth: true,
                  required: false,
                  autoFocus: false,
                  error: false,
                  color: "primary",
                  placeholder: "Return Date",
                },
              }}
            />
            </div>
          </div>
          <div className=" flex-1 flex flex-col w-60 items-center justify-center p-[5px] sm:w-full sm:flex-[unset] sm:self-stretch">
            <div className="self-stretch">
              <PassengerClassSelector />
            </div> 
          </div>
        </div>
      </div>
    </LocalizationProvider>
  );
};

FormInputsRowContainer.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propBorderRadius: PropTypes.any,
  propBackgroundColor: PropTypes.any,
  propPadding: PropTypes.any,

  /** Action props */
  onSearchTextClick: PropTypes.func,
};

export default FormInputsRowContainer;
