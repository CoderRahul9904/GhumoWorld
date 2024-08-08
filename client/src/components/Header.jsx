import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";
import AuthGoogle from "./authDropDown"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { login } from "../slices/UserSlice";

const Header = ({ className = "", bgColor,textColor }) => {

  const {isLoggedIn, userInfo}=useSelector((state) => state.user)
  const dispatch=useDispatch()
  let googleToken=localStorage.getItem('token')
  console.log(googleToken)
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/v1/GhumoWorld/profile', {
          headers: {
            Authorization: `Bearer ${googleToken}`,
          },
        });
        console.log(response.data)
        dispatch(login({ userInfo: response.data }));
      } catch (error) {
        console.error('Failed to fetch user profile:', error);
      }
    }
    if (googleToken) {
      fetchUserProfile();
    }
  }, [googleToken, dispatch]);
  
  if( bgColor== " "){
    bgColor="transparent"
  }else{
    bgColor="bg-white h-[77px]"
  }
  const navigate = useNavigate();
  
  const handleProfileNavigation =useCallback(()=>{
    navigate("/profile");
  }, [navigate])

  const onHotelsClick =useCallback(()=>{
    navigate("/hotels-page");
  }, [navigate])

  const onFickleflightLogoContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onSearchTextClick = useCallback(() => {
    navigate("/results-page");
  }, [navigate]);

  const User=userInfo
  console.log(User)
  

  return (
    <header
      className={`self-stretch  flex flex-row ${bgColor} items-center justify-center py-[22px] px-20 box-border sticky w-full top-[0] text-left text-sm text-darkslategray-200 font-roboto lg:pl-10 lg:pr-10 lg:box-border md:pl-6 md:pr-6 md:box-border ${className}`}
    >
      <div className="flex flex-row items-center justify-between">
        <div
          className="relative w-[174px] h-[33px] overflow-hidden cursor-pointer"
          onClick={onFickleflightLogoContainerClick}
        >
          <div className="absolute h-[96.97%] w-[99.83%] top-[1.59%] right-[0.17%] bottom-[1.44%] left-[0%]">
            <img
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full cursor-pointer"
              alt=""
              src="/webscreen.svg"
              onClick={onFickleflightLogoContainerClick}
            />
          </div>
        </div>
        <div className="flex flex-row items-center justify-end gap-[36px] sm:flex">
          <div className="flex flex-row items-center justify-end gap-[30px] md:hidden">
            <div 
              className= {` relative cursor-pointer hover:text-cornflowerblue-200 text-${textColor}`}
              onClick={onFickleflightLogoContainerClick}
            >
              Explore
            </div>
            <div
              className= {` relative cursor-pointer hover:text-cornflowerblue-200 text-${textColor}`}
              onClick={onSearchTextClick}
            >
              Search
            </div>
            <button className={ `cursor-pointer [border:none] hover:text-cornflowerblue-200 p-0 bg-[transparent] relative text-${textColor} text-sm font-roboto text-darkslategray-200 text  text-left inline-block`}
              onClick={onHotelsClick}
            >
              Hotels
            </button>
            <button className={`cursor-pointer [border:none] p-0 bg-[transparent] hover:text-cornflowerblue-200 relative text-sm font-roboto text-${textColor} text-darkslategray-200 text-left inline-block`}>
              Offers
            </button>
          </div>
          <div className="flex flex-row items-center justify-center gap-[12px]">
            <img
              className="relative w-6 h-6 overflow-hidden"
              alt=""
              src="/notification1.svg"
            />
            <div className=" flex gap-5 sm:gap-0 rounded-xl sm:border-none justify-center items-center"> 
              <button onClick={handleProfileNavigation} className=" bg-transparent cursor-pointer">
                {isLoggedIn && userInfo ? <img className="rounded-19xl w-9 h-9 object-cover overflow-hidden" src={userInfo.picture} alt="Profile Img" />
                :
                <svg className="rounded-19xl w-8 h-8 object-cover overflow-hidden" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"> 
                  <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"/>
                </svg>}
                  
              </button>
            </div>
            {!isLoggedIn && <div className=" absolute right-28 ">
                <AuthGoogle />
            </div>}
            <img
              className="relative w-6 h-6 overflow-hidden hidden md:flex"
              alt=""
              src="/notification.svg"
            />
          </div>
          
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
