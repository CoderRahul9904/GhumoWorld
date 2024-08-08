import ResultsContainer from "./ResultsContainer";
import ResultsWrapper from "./ResultsWrapper";
import PropTypes from "prop-types";

const HotelResultsContainer = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start py-[50px] px-20 gap-[20px] text-left text-lg text-darkslategray-300 font-roboto lg:p-10 lg:box-border md:py-[30px] md:px-6 md:box-border ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-start">
        <div className="flex-1 relative tracking-[0.04em] uppercase font-medium">
          200+ results
        </div>
        <div className="relative w-[86px] h-6 text-base">
          <img
            className="absolute top-[0px] left-[62px] w-6 h-6 overflow-hidden"
            alt=""
            src="/filters.svg"
          />
          <div className="absolute top-[2.5px] left-[0px] tracking-[0.04em]">
            Filters
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start gap-[23px] text-base text-gray-100">
        <div className="w-[561.9px] flex flex-col items-start justify-start gap-[12px] md:w-[100%!important] sm:gap-[20px]">
          <ResultsContainer
            roomImageUrl="/results-image@2x.png"
            roomType="1 king bed standard"
            hotelName="Holiday Inn Expre..."
            roomPrice="/vector4.svg"
            roomSize="/video2.svg"
          />
          <ResultsWrapper
            hotelImageUrl="/results-image1@2x.png"
            hotelName="Freehand Los Angeles"
            roomType="Bed in Quad"
            reviewCount="(1,941 reviews)"
            rating="4.2"
            price="/vector5.svg"
            discountPrice="$S 198"
          />
          <ResultsWrapper
            hotelImageUrl="/results-image2@2x.png"
            hotelName="The Westin Bonavent..."
            roomType="1 King, City view"
            reviewCount="(1,002 reviews)"
            rating="4.1"
            price="/vector6.svg"
            discountPrice="$S 289"
          />
          <ResultsContainer
            roomImageUrl="/results-image3@2x.png"
            roomType="Deluxe King"
            hotelName="The Ritz-Carlton, L..."
            roomPrice="/vector7.svg"
            roomSize="/feature-video.svg"
          />
          <iframe
            className="[border:none] self-stretch relative h-[600px] hidden md:flex md:max-w-[1000px]"
            src={`https://www.openstreetmap.org/export/embed.html?bbox=-118.56033325195314%2C33.837912419023645%2C-117.98355102539064%2C34.25948651450623&amp;layer=mapnik`}
          />
        </div>
        <iframe
          className="[border:none] self-stretch flex-1 relative md:hidden"
          src={`https://www.openstreetmap.org/export/embed.html?bbox=-118.56033325195314%2C33.837912419023645%2C-117.98355102539064%2C34.25948651450623&amp;layer=mapnik`}
        />
      </div>
    </div>
  );
};

HotelResultsContainer.propTypes = {
  className: PropTypes.string,
};

export default HotelResultsContainer;
