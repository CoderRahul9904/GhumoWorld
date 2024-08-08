import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import PropTypes from "prop-types";

const WeeklyUpdatesContainer = ({
  className = "",
  imageDimensions,
  imageId,
  thumbnailDimensions,
}) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start text-center text-lg text-cornflowerblue-300 font-roboto ${className}`}
    >
      <div className="self-stretch relative bg-aliceblue h-[529px] overflow-hidden">
        <img
          className="absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-[530px] object-cover"
          alt=""
          src={imageDimensions}
        />
        <div className="[position:relative!important] top-[52px] left-[auto!important] w-[549px] flex flex-col items-center justify-start p-5 box-border gap-[30px] ml-[auto] mr-[auto] md:py-6 md:px-0 md:box-border sm:pl-6 sm:pr-6 sm:box-border sm:ml-[auto] sm:mr-[auto] sm:[position:relative!important] sm:left-[auto!important] sm:w-full">
          <div className="self-stretch flex flex-col items-center justify-start gap-[7px]">
            <b className="self-stretch relative tracking-[0.04em] uppercase">
              subscribe to our newsletter
            </b>
            <b className="self-stretch relative text-11xl text-darkslategray-100">
              Get weekly updates
            </b>
          </div>
          <div className="self-stretch shadow-[0px_0px_24px_rgba(0,_0,_0,_0.03)] rounded-xl bg-white flex flex-col items-start justify-start py-7 px-[30px] gap-[17px] text-left text-slategray border-[1px] border-solid border-whitesmoke">
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="self-stretch relative leading-[34px]">
                Fill in your details to join the party!
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
              <div className="self-stretch flex flex-col items-start justify-start">
                <TextField
                  className="[border:none] bg-[transparent] self-stretch font-roboto text-base text-gray-200"
                  color="primary"
                  label="Your name"
                  size="medium"
                  variant="outlined"
                  type="text"
                  sx={{ "& .MuiInputBase-root": { height: "56px" } }}
                />
              </div>
              <div className="self-stretch flex flex-col items-start justify-start">
                <TextField
                  className="[border:none] bg-[transparent] self-stretch font-roboto text-base text-gray-200"
                  color="primary"
                  label="Email address"
                  size="medium"
                  variant="outlined"
                  type="text"
                  sx={{ "& .MuiInputBase-root": { height: "56px" } }}
                />
              </div>
            </div>
            <button className="cursor-pointer [border:none] p-0 bg-orange-200 rounded w-[164px] h-14 overflow-hidden flex flex-col items-center justify-center hover:bg-darkorange sm:w-full sm:hover:bg-orange-200">
              <div className="overflow-hidden flex flex-col items-start justify-start py-2 px-[22px]">
                <div className="relative text-mini tracking-[0.46px] leading-[26px] uppercase font-medium font-roboto text-white text-left">
                  submit
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
      <footer className="self-stretch [background:linear-gradient(91.74deg,_#0b5ba8_25.38%,_#299bd8)] flex flex-row items-start justify-start py-[33px] px-[84px] gap-[44px] text-left text-lg text-white font-roboto lg:p-10 lg:box-border md:flex-col md:pt-10 md:px-6 md:pb-[30px] md:box-border sm:py-[30px] sm:px-6 sm:box-border">
        <div className="flex-1 flex flex-col items-start justify-start gap-[14px] !mb-[40px] md:flex-[unset] md:self-stretch">
          <img
            className="relative w-[174px] h-[33px] overflow-hidden"
            alt=""
            src={imageId}
          />
          <div className="self-stretch relative leading-[27px]">
            GhumoWorld is your one-stop travel portal. We offer hassle free
            flight and hotel bookings. We also have all your flight needs in you
            online shop.
          </div>
          <img
            className="relative w-[130px] h-[30px]"
            alt=""
            src={thumbnailDimensions}
          />
        </div>
        <div className="relative box-border w-px h-[157.9px] border-r-[1px] border-solid border-gray-300 md:hidden" />
        <div className="flex-1 flex flex-row items-start justify-between text-base md:flex-[unset] md:self-stretch sm:flex-col">
          <div className="relative w-[197.3px] h-[159.8px] sm:!mb-[40px]">
            <div className="absolute top-[47.76px] left-[0px] inline-block w-[135.7px]">
              About Us
            </div>
            <div className="absolute top-[0px] left-[0px] text-xl leading-[27px] font-medium inline-block w-[174.7px]">
              Company
            </div>
            <div className="absolute top-[78.76px] left-[0px] inline-block w-[84.3px]">
              News
            </div>
            <div className="absolute top-[109.76px] left-[0px] inline-block w-[115.1px]">
              Careers
            </div>
            <div className="absolute top-[140.76px] left-[0px] inline-block w-[197.3px]">
              How we work
            </div>
          </div>
          <div className="relative w-[197.3px] h-[159.8px] sm:!mb-[40px]">
            <div className="absolute top-[47.76px] left-[0px] inline-block w-[109.6px]">
              Account
            </div>
            <div className="absolute top-[0px] left-[0px] text-xl leading-[27px] font-medium inline-block w-[131.6px]">
              Support
            </div>
            <div className="absolute top-[78.76px] left-[0px] inline-block w-[197.3px]">
              Support Center
            </div>
            <div className="absolute top-[109.76px] left-[0px] inline-block w-[53px]">
              FAQ
            </div>
            <div className="absolute top-[140.76px] left-[0px] inline-block w-[164.4px]">
              Accessibility
            </div>
          </div>
          <div className="relative w-[197.3px] h-[159.8px]">
            <div className="absolute top-[47.76px] left-[0px] inline-block w-[172.9px]">
              Covid Advisory
            </div>
            <div className="absolute top-[0px] left-[0px] text-xl leading-[27px] font-medium inline-block w-[76.7px]">
              More
            </div>
            <div className="absolute top-[78.76px] left-[0px] inline-block w-[135.4px]">
              Airline Fees
            </div>
            <div className="absolute top-[109.76px] left-[0px] inline-block w-[50.6px]">
              Tips
            </div>
            <div className="absolute top-[140.76px] left-[0px] inline-block w-[197.3px]">
              Quarantine Rules
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

WeeklyUpdatesContainer.propTypes = {
  className: PropTypes.string,
  imageDimensions: PropTypes.string,
  imageId: PropTypes.string,
  thumbnailDimensions: PropTypes.string,
};

export default WeeklyUpdatesContainer;
