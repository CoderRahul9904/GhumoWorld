import { useCallback } from "react";
import { Radio, FormControlLabel, Switch  } from "@mui/material";
import { useNavigate } from "react-router-dom";
import FormInputsRowContainer from "./FormInputsRowContainer";
import { useDispatch, useSelector } from "react-redux";
import { SetReturnCheckBox } from "../slices/flightSlice";
import PropTypes from "prop-types";
import Header from "./Header";

const HeroContainer = ({ className = "" }) => {

  const navigate = useNavigate();
  const dispatch=useDispatch()
  const checkReturnStatus=useSelector(state => state.flight.returnCheckBox)
  console.log(checkReturnStatus)
  const handleReturnBoxCheck = () =>{
    dispatch(SetReturnCheckBox({returnCheckBoxValue:!checkReturnStatus}))
  }
  const onSearchFlightsButtonClick = useCallback(() => {
    navigate("/results-page");
  }, [navigate]);

  return (
    <div
      className={`self-stretch flex flex-col items-center justify-start text-center text-42xl text-white font-baloo-bhai ${className}`}
    >
      <Header className=" z-50" />
      <div className=" z-0 self-stretch relative h-[640px]">
        <div className="absolute w-full top-[0px] right-[0px] left-[0px] [background:linear-gradient(78.78deg,_#114f8b_5.2%,_#2a9ad7)] h-[639.9px]" />
        <img
          className="absolute w-full top-[0.4px] right-[0px] left-[0px] max-w-full overflow-hidden h-[640px] object-cover"
          alt=""
          src="/banner--background@2x.png"
        />
        <div className="absolute top-[0px] left-[0px] w-full h-[640px] flex flex-col items-center justify-center py-0 px-[140px] box-border gap-[43px] md:pl-[30px] md:pr-[30px] md:box-border">
          <div className="self-stretch flex flex-col items-center justify-start gap-[5px]">
            <div className="self-stretch relative leading-[67px] sm:text-23xl sm:leading-[48px]">{`Let’s explore & travel the world`}</div>
            <div className="self-stretch relative text-5xl leading-[32px] font-roboto">
              Find the best destinations and the most popular stays!
            </div>
          </div>
          <div className="self-stretch rounded-3xs bg-white flex flex-col items-start justify-start p-5 gap-[4px] text-left text-xl text-darkslategray-300 font-roboto md:flex-col sm:mt-5">
            <div className="self-stretch overflow-hidden flex flex-row items-center justify-start p-[5px] gap-[5px] sm:flex-col sm:items-start">
              <b className="flex-1 relative tracking-[0.04em] uppercase sm:w-full sm:pb-2.5 sm:mb-1.5 sm:[border-bottom:1px] sm:[border-bottom-style:solid] sm:border-b-whitesmoke sm:flex-[unset] sm:self-stretch">
                Search flights
              </b>
              <div className="flex flex-row items-center justify-start sm:w-full">
                <div className="relative w-[216.5px] h-[38px] sm:w-[100%!important]">
                  <FormControlLabel
                    className="absolute top-[0px] left-[-20px]"
                    label="Return"
                    labelPlacement="end"
                    onClick={handleReturnBoxCheck}
                    checked={checkReturnStatus}
                    // control={<Radio size="medium" />}
                    control={<Switch defaultChecked />}
                  />
                  <FormControlLabel
                    className="absolute top-[0px] left-[85px]"
                    label="One-way"
                    labelPlacement="end"
                    checked={true}
                    inputProps={{ 'aria-label': 'controlled' }}
                    // control={<Radio color="primary" checked size="medium" />}
                    control={<Switch defaultChecked />}
                  />
                </div>
              </div>
            </div>
            <FormInputsRowContainer
              onSearchTextClick={onSearchFlightsButtonClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

HeroContainer.propTypes = {
  className: PropTypes.string,
};

export default HeroContainer;
