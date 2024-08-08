import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const UpcomingFlightContainer = ({ className = "" }) => {
  const navigate = useNavigate();

  const onHotelClick = useCallback(() => {
    navigate("/hotels-page");
  }, [navigate]);

  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[20px] text-left text-lg text-darkslategray-300 font-roboto md:block ${className}`}
    >
      <b className="relative tracking-[0.04em] uppercase inline-block w-[1268.1px]">
        Upcoming Flight
      </b>
      <div className="self-stretch flex flex-row items-start justify-start gap-[36px] text-5xl text-cornflowerblue-300 md:flex-col">
        <div className="rounded-lg flex flex-col items-start justify-start p-5 gap-[21px] border-[1px] border-solid border-whitesmoke lg:w-[520px] md:w-full md:block md:mb-[30px]">
          <div className="self-stretch flex flex-row items-center justify-between">
            <div className="relative w-[72px] h-[46px]">
              <b className="absolute top-[0px] left-[0px] tracking-[0.04em] capitalize inline-block w-[44.7px]">
                SIN
              </b>
              <div className="absolute top-[30px] left-[0px] text-sm tracking-[0.02em] capitalize text-gray-100 inline-block w-[72px]">
                Singapore
              </div>
            </div>
            <div className="relative w-[117.4px] h-[44.1px] text-sm text-gray-100">
              <b className="absolute top-[28.09px] left-[23.69px] tracking-[0.02em] capitalize inline-block w-[65.7px]">
                15H 55M
              </b>
              <img
                className="absolute top-[0px] left-[0px] w-[117.4px] h-6"
                alt=""
                src="/flight-icons.svg"
              />
            </div>
            <div className="relative w-[87.3px] h-[46px] text-right">
              <b className="absolute top-[0px] left-[36px] tracking-[0.04em] capitalize inline-block w-[51.3px]">
                LAX
              </b>
              <div className="absolute top-[30px] left-[0px] text-sm tracking-[0.02em] capitalize text-gray-100 inline-block w-[87.3px]">
                Los Angeles
              </div>
            </div>
          </div>
          <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-whitesmoke md:w-full" />
          <div className="self-stretch flex flex-row items-center justify-between text-sm text-gray-100">
            <div className="relative tracking-[0.02em] capitalize inline-block w-[203.9px] shrink-0">
              Departs on: 1 May, 08:00 AM
            </div>
            <div className="relative tracking-[0.02em] text-right inline-block w-[87.2px] shrink-0">
              <b>4 days</b>
              <span> to go</span>
            </div>
          </div>
        </div>
        <div className="relative box-border w-px h-[146px] border-r-[1px] border-solid border-whitesmoke md:hidden" />
        <div className="flex flex-col items-start justify-start gap-[20px] text-lg text-lightgray md:w-full">
          <div className="self-stretch relative tracking-[0.04em] uppercase">
            Prepare for your trip
          </div>
          <div className="self-stretch flex flex-row items-start justify-between sm:flex-row sm:text-center sm:flex-wrap sm:justify-between sm:ml-[-28px] sm:mr-[-28px]">
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center gap-[8px] sm:pb-5 sm:box-border sm:w-[33.33%] sm:text-center"
              onClick={onHotelClick}
            >
              <img
                className="relative w-[65.4px] h-[65.4px]"
                alt=""
                src="/hotel-icon.svg"
              />
              <div className="relative text-mini tracking-[0.04em] font-roboto text-gray-100 text-left">
                Hotel
              </div>
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center gap-[8px] sm:pb-5 sm:box-border sm:w-[33.33%] sm:text-center">
              <div className="relative w-[65.4px] h-[65.4px]">
                <div className="absolute top-[0px] left-[0px] rounded-2xl bg-sandybrown w-[65.4px] h-[65.4px]" />
                <img
                  className="absolute h-[47.86%] w-[48.32%] top-[26.03%] right-[25.88%] bottom-[26.11%] left-[25.8%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/ticket.svg"
                />
              </div>
              <div className="relative text-mini tracking-[0.04em] font-roboto text-gray-100 text-center">
                Attractions
              </div>
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center gap-[8px] sm:pb-5 sm:box-border sm:w-[33.33%] sm:text-center">
              <img
                className="relative w-[65.4px] h-[65.4px]"
                alt=""
                src="/eats-icon.svg"
              />
              <div className="relative text-mini tracking-[0.04em] font-roboto text-gray-100 text-center">
                Eats
              </div>
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center gap-[8px] sm:pb-5 sm:box-border sm:w-[33.33%] sm:text-center">
              <div className="relative w-[65.4px] h-[65.4px]">
                <div className="absolute top-[0px] left-[0px] rounded-2xl bg-gold w-[65.4px] h-[65.4px]" />
                <img
                  className="absolute h-[48.47%] w-[41.13%] top-[26.5%] right-[29.46%] bottom-[25.03%] left-[29.41%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/train.svg"
                />
              </div>
              <div className="relative text-mini tracking-[0.04em] font-roboto text-gray-100 text-center">
                Commute
              </div>
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center gap-[8px] sm:pb-5 sm:box-border sm:w-[33.33%] sm:text-center">
              <div className="relative w-[70px] h-[65.4px]">
                <div className="absolute top-[0px] left-[0px] rounded-2xl bg-cornflowerblue-100 w-[70px] h-[65.4px]" />
                <img
                  className="absolute h-[40.21%] w-[40.57%] top-[29.63%] right-[29.69%] bottom-[30.16%] left-[29.74%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/taxi.svg"
                />
              </div>
              <div className="relative text-mini tracking-[0.04em] font-roboto text-gray-100 text-center inline-block w-[32.1px]">
                Taxi
              </div>
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center gap-[8px] sm:pb-5 sm:box-border sm:w-[33.33%] sm:text-center">
              <div className="relative w-[65.4px] h-[65.4px]">
                <div className="absolute top-[0px] left-[0px] rounded-2xl bg-yellowgreen w-[65.4px] h-[65.4px]" />
                <img
                  className="absolute h-[35.63%] w-[39.91%] top-[32.19%] right-[30.06%] bottom-[32.18%] left-[30.03%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/movie.svg"
                />
              </div>
              <div className="relative text-mini tracking-[0.04em] font-roboto text-gray-100 text-center">
                Movies
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

UpcomingFlightContainer.propTypes = {
  className: PropTypes.string,
};

export default UpcomingFlightContainer;
