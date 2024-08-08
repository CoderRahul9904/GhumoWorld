import { createSlice } from "@reduxjs/toolkit";

//hi
const userSlice=createSlice({
    name: "user",
    initialState:{isLoggedIn: false,googleToken: null,userInfo:null},
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
    }
})

export const {login,logout,fetchedFlight}= userSlice.actions

export default userSlice.reducer