import PropTypes from "prop-types";

const DestinationContainer = ({
  className = "",
  destinationName,
  destinationPrice,
  destinationImageUrl,
}) => {
  return (
    <button
      className={`cursor-pointer [border:none] py-0 px-4 bg-[transparent] w-3/12 flex flex-col items-center justify-center box-border md:p-4 md:box-border md:w-6/12 sm:w-full ${className}`}
    >
      <div className="self-stretch relative rounded-3xs h-[182px] overflow-hidden">
        <img
          className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src={destinationName}
        />
        <div className="absolute w-[calc(100%_-_0.6px)] top-[0px] right-[0.31px] left-[0.29px] flex flex-row items-start justify-start py-2 px-3 box-border">
          <b className="flex-1 relative text-xl tracking-[0.02em] font-roboto text-white text-left">
            {destinationPrice}
          </b>
          <div className="relative w-[90.9px] h-[59px]">
            <div className="absolute top-[21px] left-[0px] text-19xl leading-[38px] font-baloo-bhai text-white text-right inline-block w-[90.9px]">
              {destinationImageUrl}
            </div>
            <div className="absolute top-[0px] left-[38.39px] text-base tracking-[0.04em] uppercase font-roboto text-white text-right inline-block w-[52.5px]">
              from
            </div>
          </div>
        </div>
      </div>
    </button>
  );
};

DestinationContainer.propTypes = {
  className: PropTypes.string,
  destinationName: PropTypes.string,
  destinationPrice: PropTypes.string,
  destinationImageUrl: PropTypes.string,
};

export default DestinationContainer;
