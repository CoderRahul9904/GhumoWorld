import React from 'react';
import axios from 'axios'
import api from '../utils/api';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { useDispatch } from "react-redux";
import { login, logout } from '../slices/UserSlice';
function AuthGoogle() {
  
  const dispatch = useDispatch();
  
  const googleId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
  const handleGoogleLogin = async (response) => {
    const tokenId = response.credential;
    try {
      const profileResponse = await api.post('/api/v1/GhumoWorld/get-info', { tokenId });
      const authToken = profileResponse.data.token;
      localStorage.setItem('token',authToken)
      dispatch(login({ googleToken: authToken }));
    } catch (error) {
      console.error('Failed to fetch user profile:', error);
    }
  };
  
  

  const handleUnsuccessfulGoogleLogin = (response) => {
    console.error('Login Failed:', response);
  };

  return (
    <GoogleOAuthProvider clientId={googleId}>
      <GoogleLogin
        onSuccess={handleGoogleLogin}
        onError={handleUnsuccessfulGoogleLogin}
        useOneTap={false}
        cookiePolicy={"single_host_origin"}
        scope="https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile"
      />
    </GoogleOAuthProvider>
  );
}

export default AuthGoogle;
