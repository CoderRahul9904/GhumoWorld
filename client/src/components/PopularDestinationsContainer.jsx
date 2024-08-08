import DestinationContainer from "./DestinationContainer";
import PropTypes from "prop-types";

const PopularDestinationsContainer = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[24px] text-left text-lg text-cornflowerblue-300 font-roboto ${className}`}
    >
      <div className="self-stretch flex flex-row items-center justify-start sm:flex-col sm:self-start">
        <div className="flex flex-col items-start justify-start gap-[6px]">
          <b className="self-stretch relative tracking-[0.04em] uppercase">
            Plan your next trip
          </b>
          <b className="self-stretch relative text-11xl tracking-[0.04em] capitalize text-darkslategray-300 sm:text-3xl">
            Most Popular Destinations
          </b>
        </div>
        <button className="cursor-pointer [border:none] p-0 bg-white rounded-12xl w-[231.4px] flex flex-row items-start justify-start gap-[10px] md:hidden">
          <div className="relative text-lg tracking-[0.04em] font-medium font-roboto text-cornflowerblue-300 text-right inline-block w-[197.3px] shrink-0">
            View all destinations
          </div>
          <img
            className="relative w-6 h-6 overflow-hidden"
            alt=""
            src="/arrowright.svg"
          />
        </button>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start ml-[-16px] mr-[-16px] md:ml-[-16px] md:mr-[-16px] md:flex-wrap md:mt-[-16px] md:mb-[-16px]">
        <DestinationContainer
          destinationName="/parisimage@2x.png"
          destinationPrice="Paris"
          destinationImageUrl="$699"
        />
        <DestinationContainer
          destinationName="/greeceimage@2x.png"
          destinationPrice="Greece"
          destinationImageUrl="$1079"
        />
        <DestinationContainer
          destinationName="/norwayimage@2x.png"
          destinationPrice="Norway"
          destinationImageUrl="$895"
        />
        <DestinationContainer
          destinationName="/tuscanyimage@2x.png"
          destinationPrice="Tuscany"
          destinationImageUrl="$1245"
        />
      </div>
      <div className="rounded-12xl bg-white w-[231.4px] hidden flex-row items-start justify-start gap-[10px] text-right md:flex md:mt-4">
        <div className="relative tracking-[0.04em] font-medium inline-block w-[197.3px] shrink-0 md:w-auto">
          View all destinations
        </div>
        <img
          className="relative w-6 h-6 overflow-hidden"
          alt=""
          src="/arrowright1.svg"
        />
      </div>
    </div>
  );
};

PopularDestinationsContainer.propTypes = {
  className: PropTypes.string,
};

export default PopularDestinationsContainer;
