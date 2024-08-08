import PropTypes from "prop-types";




const FlightContainer = ({
  className = "",
  flightDetails,
  airlineName,
  departureTime,
  flightNumber,
  flightDuration,
  arrivalTime,
  flightPrice,
  iatacodeArrival,
  iatacodeDeparture,
}) => {
  return (
    <div
      className={`self-stretch rounded-md bg-white flex flex-row hover:bg-blue-200 items-center justify-center py-0 px-[25px] gap-[50px] text-left text-base text-dimgray-200 font-roboto sm:flex-col sm:py-5 sm:px-0 sm:box-border ${className}`}
    >
      <div className="w-1/5 flex flex-row items-center justify-start gap-[7px] md:flex-col sm:flex-row sm:w-[100%!important] sm:ml-10">
        <img
          className="relative w-[34.8px] h-[46px] sm:[transform:scale(0.8)]"
          alt=""
          src={flightDetails}
        />
        <div className="relative tracking-[0.26px]">{airlineName}</div>
      </div>
      <div className="flex flex-row items-center justify-between w-[64%] text-2xl text-cornflowerblue-200 md:flex-row sm:w-[90%] sm:flex-row sm:p-0 sm:box-border sm:!mr-[0px] mq428small:w-[90%]">
        <div className="relative w-[93px] h-[52px] mq428small:w-20">
          <div className="absolute w-full top-[0%] left-[0%] tracking-[0.32px] font-medium inline-block mq428small:text-base">
            {departureTime}
          </div>
          <div className="absolute w-[79.46%] top-[63.46%] left-[0%] text-base tracking-[0.26px] text-dimgray-100 inline-block mq428small:text-base">
            {iatacodeDeparture}
          </div>
        </div>
        <div className="relative w-[121px] h-[55px] text-center text-base text-gray-100 sm:[transform:scale(0.9)]">
          <img
            className="absolute h-[27.45%] w-[88.51%] top-[0%] right-[5.51%] bottom-[72.55%] left-[5.98%] max-w-full overflow-hidden max-h-full"
            alt=""
            src={flightNumber}
          />
          <div className="absolute top-[65.45%] left-[0%] tracking-[0.21px] mq428small:text-smi">
            {flightDuration}
          </div>
        </div>
        <div className="relative w-[91px] h-[52px] text-right mq428small:w-20">
          <div className="absolute w-full top-[0%] left-[0%] tracking-[0.32px] font-medium inline-block mq428small:text-base">
            {arrivalTime}
          </div>
          <div className="absolute w-[81.21%] top-[63.46%] left-[17.65%] text-base tracking-[0.26px] text-dimgray-100 inline-block mq428small:text-base">
            {iatacodeArrival}
          </div>
        </div>
      </div>
      <div className="w-32 flex flex-row items-center sm:bg-orange-50  sm:rounded-lg justify-center text-center text-5xl text-orange-100">
        <img
          className="relative max-w-full overflow-hidden h-[100px] sm:hidden"
          alt=""
          src="/vector-1.svg"
        />
        <b className="flex-1 relative tracking-[0.34px]">{flightPrice}</b>
      </div>
    </div>
  );
};

FlightContainer.propTypes = {
  className: PropTypes.string,
  flightDetails: PropTypes.string,
  airlineName: PropTypes.string,
  departureTime: PropTypes.string,
  flightNumber: PropTypes.string,
  flightDuration: PropTypes.string,
  arrivalTime: PropTypes.string,
  flightPrice: PropTypes.string,
};

export default FlightContainer;
