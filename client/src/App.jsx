import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import axios from 'axios';
import { useDispatch } from "react-redux";
import { SetCurrencyCode, SetCurrencySymbol } from "./slices/flightSlice";
import { SetLatitude, SetLongitude } from "./slices/UserSlice";
import Homepage from "./pages/Homepage";
import ResultsPage from "./pages/ResultsPage";
import HotelsPage from "./pages/HotelsPage";
import ProfilePage from "./pages/ProfilePage";
import LoginPage from "./pages/LoginPage";
import TicketPage from "./pages/Ticketpage";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;
  const dispatch=useDispatch()
  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/results-page":
        title = "";
        metaDescription = "";
        break;
      case "/hotels-page":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);


  useEffect(()=>{
    axios.get('https://get.geojs.io/v1/ip/geo.json')
         .then(response => {
          const country_code=response.data.country_code3
          
          const latitude=response.data.latitude
          const longitude=response.data.longitude
          
          if(latitude && longitude){
            dispatch(SetLatitude({latitude:latitude}))
            dispatch(SetLongitude({longitude:longitude}))
          }
          if(country_code){
            return axios.get(`https://restcountries.com/v3.1/alpha/${country_code}`)
          }
          })
         .then(response =>{
          const currencyCode = Object.keys(response.data[0].currencies)[0];
          const firstCurrencyKey = Object.keys(response.data[0].currencies)[0];
          const currencySymbol = response.data[0].currencies[firstCurrencyKey].symbol;
          if(currencySymbol){
            dispatch(SetCurrencySymbol({currencySymbol: currencySymbol}))
          }
          dispatch(SetCurrencyCode({currencyCode: currencyCode}))
         })
         .catch(error => {
          console.error(error);})
  },[])

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/results-page" element={<ResultsPage />} />
      <Route path="/ticket-page" element={<TicketPage />} />
      <Route path="/hotels-page" element={<HotelsPage />} />
    </Routes>
  );
}
export default App;
