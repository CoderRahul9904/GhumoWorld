import PropTypes from "prop-types";

const ResultsWrapper = ({
  className = "",
  hotelImageUrl,
  hotelName,
  roomType,
  reviewCount,
  rating,
  price,
  discountPrice,
}) => {
  return (
    <div
      className={`self-stretch rounded-3xs bg-cornflowerblue-400 flex flex-row items-start justify-start gap-[16px] text-left text-base text-darkslategray-300 font-roboto sm:flex-col ${className}`}
    >
      <img
        className="relative rounded-tl-3xs rounded-tr-none rounded-br-none rounded-bl-3xs w-[260px] h-[220px] object-cover sm:w-[100%!important] sm:!rounded-[10px]"
        alt=""
        src={hotelImageUrl}
      />
      <div className="flex flex-col items-start justify-start py-[15px] pr-3 pl-0 gap-[31px] sm:p-[15px] sm:box-border">
        <div className="self-stretch flex flex-row items-start justify-start">
          <div className="flex-1 relative h-[76px]">
            <b className="absolute top-[25px] left-[0px] text-3xl tracking-[0.04em] capitalize inline-block w-[273.9px]">
              {hotelName}
            </b>
            <div className="absolute top-[0px] left-[0px] tracking-[0.02em] text-gray-100 inline-block w-[172.8px]">
              {roomType}
            </div>
            <div className="absolute top-[57px] left-[0px] w-[202.8px] h-[19px] text-cornflowerblue-200">
              <div className="absolute top-[0px] left-[64.07px] tracking-[0.04em] inline-block w-[138.7px]">
                {reviewCount}
              </div>
              <div className="absolute top-[0px] left-[0px] w-[54.1px] h-[19px] text-darkslategray-300">
                <div className="absolute top-[0px] left-[25.86px] tracking-[0.04em] font-medium inline-block w-[28.2px]">
                  {rating}
                </div>
                <img
                  className="absolute h-[84.21%] w-[34.75%] top-[0%] right-[65.25%] bottom-[15.79%] left-[0%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src={price}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-[164.5px] h-[83.6px] text-3xl">
          <div className="absolute top-[0px] left-[0px] w-28 h-[26px]">
            <b className="absolute top-[0px] left-[0px] tracking-[0.02em] capitalize">
              {discountPrice}
            </b>
            <div className="absolute top-[8px] left-[73px] text-sm tracking-[0.02em]">
              /night
            </div>
          </div>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[37.58px] left-[0.49px] w-[164px] h-[46px]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-cornflowerblue-200" />
            <div className="absolute top-[calc(50%_-_10.5px)] left-[calc(50%_-_54.5px)] text-lg tracking-[0.04em] font-medium font-roboto text-white text-center">
              View Details
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

ResultsWrapper.propTypes = {
  className: PropTypes.string,
  hotelImageUrl: PropTypes.string,
  hotelName: PropTypes.string,
  roomType: PropTypes.string,
  reviewCount: PropTypes.string,
  rating: PropTypes.string,
  price: PropTypes.string,
  discountPrice: PropTypes.string,
};

export default ResultsWrapper;
