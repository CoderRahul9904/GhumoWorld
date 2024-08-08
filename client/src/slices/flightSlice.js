import { createSlice } from "@reduxjs/toolkit";

const FlightSlice= createSlice({
    name: "flight",
    initialState:{
                AvailableFlights: null,
                departureCode: null,
                arrivalCode:null,
                returnCheckBox: false,
                departureDate: null,
                returnDate: null,
                adults: null,
                infant:null,
                children: null,
                flightClass:null},
    reducers:{
        fetchedFlight(state,action){
            state.AvailableFlights=action.payload.AvailableFlights
        },
        SetAdult(state,action){
            state.adults=action.payload.adults
        },
        SetChildren(state,action){
            state.children=action.payload.children
        },
        SetInfant(state,action){
            state.infant=action.payload.infant
        },
        SetDepartureLocation(state,action){
            state.departureCode=action.payload.departureCode
        },
        SetArrivalLocation(state,action){
            state.arrivalCode=action.payload.arrivalCode
        },
        SetDepartureDate(state,action){
            state.departureDate=action.payload.departureDate
        },
        SetReturnDate(state,action){
            state.returnDate=action.payload.returnDate
        },
        SetReturnCheckBox(state,action){
            state.returnCheckBox=action.payload.returnCheckBoxValue
        }
    }
})


export const  { fetchedFlight,
                SetAdult,
                SetChildren,
                SetArrivalLocation,
                SetDepartureDate,
                SetDepartureLocation,
                SetInfant,
                SetReturnDate,
                SetReturnCheckBox 
              }=FlightSlice.actions

export default FlightSlice.reducer
