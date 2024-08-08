import {configureStore} from "@reduxjs/toolkit"
import userReducer from "../slices/UserSlice"
import flightReducer from "../slices/flightSlice"


const store = configureStore({
    reducer: {
      user: userReducer,
      flight: flightReducer,
    },
});

export default store