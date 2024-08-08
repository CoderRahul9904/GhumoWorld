import RecommendedHolidayCardContaine from "./RecommendedHolidayCardContaine";
import PropTypes from "prop-types";

const RecommendedHolidaysContainer = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-center gap-[24px] text-left text-11xl text-darkslategray-300 font-roboto ${className}`}
    >
      <div className="self-stretch flex flex-row items-center justify-start">
        <b className="flex-1 relative tracking-[0.04em] capitalize sm:text-3xl">
          Recommended Holidays
        </b>
        <button className="cursor-pointer [border:none] p-0 bg-white rounded-12xl w-[199.9px] flex flex-row items-start justify-start gap-[10px] md:hidden">
          <div className="relative text-lg tracking-[0.04em] font-medium font-roboto text-cornflowerblue-300 text-right inline-block w-[165.9px] shrink-0">
            View all holidays
          </div>
          <img
            className="relative w-6 h-6 overflow-hidden"
            alt=""
            src="/arrowright2.svg"
          />
        </button>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start ml-[-16px] mr-[-16px] md:ml-[-16px] md:mr-[-16px] md:flex-wrap">
        <RecommendedHolidayCardContaine
          packageName="/unsplash5mv818tzxeo@2x.png"
          packageDestination="Bali"
          packageDuration="4D3N"
          packagePrice="$899"
        />
        <RecommendedHolidayCardContaine
          packageName="/switzerlandimage@2x.png"
          packageDestination="Swiss"
          packageDuration="6D5N"
          packagePrice="$900"
        />
        <RecommendedHolidayCardContaine
          packageName="/boracayimage@2x.png"
          packageDestination="Boracay"
          packageDuration="5D4N"
          packagePrice="$699"
        />
        <RecommendedHolidayCardContaine
          packageName="/palawanimage@2x.png"
          packageDestination="Palawan"
          packageDuration="4D3N"
          packagePrice="$789"
        />
      </div>
      <div className="rounded-12xl bg-white w-[199.9px] hidden flex-row items-start justify-start gap-[10px] text-right text-lg text-cornflowerblue-300 md:flex md:[mrgin-top:16px]">
        <div className="relative tracking-[0.04em] font-medium inline-block w-[165.9px] shrink-0 md:w-auto">
          View all holidays
        </div>
        <img
          className="relative w-6 h-6 overflow-hidden"
          alt=""
          src="/arrowright3.svg"
        />
      </div>
    </div>
  );
};

RecommendedHolidaysContainer.propTypes = {
  className: PropTypes.string,
};

export default RecommendedHolidaysContainer;
