import PropTypes from "prop-types";

const HotelCard2Container = ({
  className = "",
  roomDescription,
  roomType,
  roomPrice,
  roomReviews,
  hotelName,
  roomRating,
  roomCoordinates,
}) => {
  return (
    <div
      className={`self-stretch flex-1 flex flex-row items-start justify-center py-0 px-3 box-border w-3/12 text-left text-base text-cornflowerblue-200 font-roboto md:w-[33.33%] sm:w-full sm:flex-[unset] sm:self-stretch ${className}`}
    >
      <div className="self-stretch rounded-3xs bg-white flex flex-col items-start justify-start py-[15px] px-[13px] box-border gap-[23px] w-3/12 hover:bg-gainsboro hover:cursor-pointer lg:w-[25%!important] md:w-full sm:w-[100%!important] sm:mb-5">
        <img
          className="self-stretch relative rounded-3xs max-w-full overflow-hidden h-[200px] object-cover"
          alt=""
          src={roomDescription}
        />
        <div className="self-stretch flex flex-row items-start justify-start text-darkslategray-300">
          <div className="flex flex-col items-start justify-start gap-[6px]">
            <div className="self-stretch relative tracking-[0.02em] text-gray-100">
              {roomType}
            </div>
            <b className="self-stretch relative text-3xl tracking-[0.04em] capitalize sm:text-xl">
              {roomPrice}
            </b>
            <div className="self-stretch relative text-lg tracking-[0.04em]">
              {roomReviews}
            </div>
          </div>
        </div>
        <div className="self-stretch relative h-[19px]">
          <div className="absolute top-[0px] left-[53.63px] tracking-[0.04em] inline-block w-[216.4px]">
            {hotelName}
          </div>
          <div className="absolute top-[0px] left-[0px] w-[44.3px] h-[19px] text-darkslategray-300">
            <div className="absolute top-[0px] left-[20.34px] tracking-[0.04em] font-medium">
              {roomRating}
            </div>
            <img
              className="absolute h-[90.53%] w-[37.47%] top-[0%] right-[62.53%] bottom-[9.47%] left-[0%] max-w-full overflow-hidden max-h-full"
              alt=""
              src={roomCoordinates}
            />
          </div>
        </div>
        <div className="self-stretch rounded box-border h-[46px] overflow-hidden flex flex-col items-center justify-center text-mini border-[1px] border-solid border-lavender sm:w-[100%!important]">
          <div className="relative tracking-[0.46px] leading-[26px] uppercase font-medium">
            More details
          </div>
        </div>
      </div>
    </div>
  );
};

HotelCard2Container.propTypes = {
  className: PropTypes.string,
  roomDescription: PropTypes.string,
  roomType: PropTypes.string,
  roomPrice: PropTypes.string,
  roomReviews: PropTypes.string,
  hotelName: PropTypes.string,
  roomRating: PropTypes.string,
  roomCoordinates: PropTypes.string,
};

export default HotelCard2Container;
