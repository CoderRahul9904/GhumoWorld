import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import HotelCardContainer from "./HotelCardContainer";
import HotelCard2Container from "./HotelCard2Container";
import PropTypes from "prop-types";

const PopularStaysForm = ({ className = "" }) => {
  const navigate = useNavigate();

  const onViewAllStaysButtonClick = useCallback(() => {
    navigate("/hotels-page");
  }, [navigate]);

  return (
    <form
      className={`m-0 self-stretch flex flex-col items-start justify-start gap-[20px] ${className}`}
    >
      <div className="self-stretch flex flex-row items-center justify-center">
        <div className="flex-1 relative h-[35px]">
          <b className="absolute top-[0px] left-[0px] text-11xl tracking-[0.04em] capitalize inline-block font-roboto text-darkslategray-300 text-left w-[1105.3px] sm:text-3xl">
            Popular Stays
          </b>
        </div>
        <button
          className="cursor-pointer [border:none] p-0 bg-white rounded-12xl flex flex-row items-start justify-start gap-[10px] md:hidden"
          onClick={onViewAllStaysButtonClick}
        >
          <div className="relative text-lg tracking-[0.04em] font-medium font-roboto text-cornflowerblue-300 text-right inline-block w-[140.7px] shrink-0">
            View all stays
          </div>
          <img
            className="relative w-6 h-6 overflow-hidden"
            alt=""
            src="/arrowright2.svg"
          />
        </button>
      </div>
      <div className="self-stretch flex flex-row items-center justify-start ml-[-12px] mr-[-12px] lg:pr-10 lg:box-border lg:ml-[-12px] lg:mr-[-50px] md:mr-[-50px] md:ml-[-12px] sm:flex-col sm:pr-0 sm:box-border sm:mr-[-12px] sm:ml-[-12px]">
        <HotelCardContainer
          roomDescription="/matterhorn-suites-image@2x.png"
          roomType="Entire bungalow"
          hotelName="Matterhorn Suites"
          roomPrice="$575/night"
          roomReviews="/video.svg"
          hotelReviews="(60 reviews)"
          roomRating="4.9"
          roomImageUrl="/vector.svg"
        />
        <HotelCard2Container
          roomDescription="/discovery-shores-image@2x.png"
          roomType="2-Story beachfront suite"
          roomPrice="Discovery Shores"
          roomReviews="$360/night"
          hotelName="(116 reviews)"
          roomRating="4.8"
          roomCoordinates="/vector1.svg"
        />
        <HotelCard2Container
          roomDescription="/arctic-hut-image@2x.png"
          roomType="Single deluxe hut"
          roomPrice="Arctic Hut "
          roomReviews="$420/night"
          hotelName="(78 reviews)"
          roomRating="4.7"
          roomCoordinates="/vector2.svg"
        />
        <HotelCardContainer
          roomDescription="/lake-louise-image@2x.png"
          roomType="Deluxe King Room"
          hotelName="Lake Louise Inn"
          roomPrice="$244/night"
          roomReviews="/video1.svg"
          hotelReviews="(63 reviews)"
          roomRating="4.6"
          roomImageUrl="/vector3.svg"
        />
      </div>
      <div className="rounded-12xl bg-white hidden flex-row items-start justify-start gap-[10px] md:flex md:mt-4">
        <div className="relative text-lg tracking-[0.04em] font-medium font-roboto text-cornflowerblue-300 text-right inline-block w-[140.7px] shrink-0 md:w-auto">
          View all stays
        </div>
        <img
          className="relative w-6 h-6 overflow-hidden"
          alt=""
          src="/arrowright4.svg"
        />
      </div>
    </form>
  );
};

PopularStaysForm.propTypes = {
  className: PropTypes.string,
};

export default PopularStaysForm;
