import { createSlice } from "@reduxjs/toolkit";

//hi
const userSlice=createSlice({
    name: "user",
    initialState:{isLoggedIn: false,googleToken: null,userInfo:null,latitude: null,longitude: null},
    reducers:{
        login(state,action){
            state.isLoggedIn = true;
            state.googleToken = action.payload.googleToken;
            state.userInfo =action.payload.userInfo
        },
        logout(state,action){
            state.isLoggedIn = false;
            state.googleToken = null;
            state.userInfo=null;
        },
        SetLatitude(state,action){
            state.latitude=action.payload.latitude
        },
        SetLongitude(state,action){
            state.longitude=action.payload.longitude
        }
    }
})

export const {login,logout, SetLatitude, SetLongitude}= userSlice.actions

export default userSlice.reducer