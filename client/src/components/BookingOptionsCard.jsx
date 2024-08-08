import { useMemo } from "react";
import { Checkbox, FormControlLabel } from "@mui/material";
import PropTypes from "prop-types";

const BookingOptionsCard = ({
  className = "",
  bookingOptionsText,
  propTop,
  propWidth
}) => {
  const bookingOptionsStyle = useMemo(() => {
    return {
      top: propTop,
      width: propWidth,
    };
  }, [propTop, propWidth]);

  return (
    <div
      className={`absolute top-[231.4px] left-[0px] w-[221px] h-[106px] text-left text-3xl text-dimgray-200 font-roboto ${className}`}
      style={bookingOptionsStyle}
    >
      <b className="absolute top-[0px] left-[0px] tracking-[0.26px] inline-block w-[189px]">
        {bookingOptionsText}
      </b>
      <FormControlLabel
        className="absolute top-[50px] left-[0px]"
        label="Book on Fickleflight"
        labelPlacement="end"
        control={<Checkbox size="medium" />}
      />
      <FormControlLabel
        className="absolute top-[86px] left-[0px]"
        label="Official Airline Websites"
        labelPlacement="end"
        control={<Checkbox size="medium" />}
      />
    </div>
  );
};

BookingOptionsCard.propTypes = {
  className: PropTypes.string,
  bookingOptionsText: PropTypes.string,

  /** Style props */
  propTop: PropTypes.any,
  propWidth: PropTypes.any,
};

export default BookingOptionsCard;
