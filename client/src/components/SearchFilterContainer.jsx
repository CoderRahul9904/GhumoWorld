import BookingOptionsCard from "./BookingOptionsCard";
import PropTypes from "prop-types";

const SearchFilterContainer = ({ className = "" }) => {
  return (
    <div
      className={`relative w-[350.5px] h-[667px] text-left text-xl text-dimgray-200 font-roboto lg:hidden ${className}`}
    >
      <div className="absolute top-[0px] left-[0px] w-[311.5px] h-[47px]">
        <div className="absolute top-[0px] left-[0px] tracking-[0.26px] inline-block w-[219.4px]">
          10 out of 177 Results
        </div>
        <img
          className="absolute top-[46.5px] left-[0px] max-h-full w-[311.5px]"
          alt=""
          src="/vector-2.svg"
        />
      </div>
      <BookingOptionsCard bookingOptionsText="Booking Options" />
      <BookingOptionsCard
        bookingOptionsText="Flight Experience"
        propTop="376.6px"
        propWidth="310.8px"
      />
      <BookingOptionsCard
        bookingOptionsText="Airlines"
        propTop="561px"
        propWidth="181px"
      />
      <BookingOptionsCard
        bookingOptionsText="Stops"
        propTop="86.2px"
        propWidth="296.6px"
      />
      <img
        className="absolute top-[521.3px] left-[0px] max-h-full w-[350.5px]"
        alt=""
        src="/seperator.svg"
      />
    </div>
  );
};

SearchFilterContainer.propTypes = {
  className: PropTypes.string,
};

export default SearchFilterContainer;
