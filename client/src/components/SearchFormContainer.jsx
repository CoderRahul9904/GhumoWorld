import FormInputsRowContainer from "./FormInputsRowContainer";
import PropTypes from "prop-types";

const SearchFormContainer = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch [background:linear-gradient(100.3deg,_#114f8b,_#2a9ad7)] flex flex-col items-start justify-start text-left text-42xl text-white font-baloo-bhai ${className}`}
    >
      <div className="self-stretch relative h-[362px] sm:h-[480px]">
        <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] [background:linear-gradient(78.78deg,_#114f8b_5.2%,_#2a9ad7)]" />
        <img
          className="absolute h-full w-full top-[0.4px] right-[0px] bottom-[-0.4px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/banner-background@2x.png"
        />
        <div className="absolute w-full top-[calc(50%_-_96.5px)] right-[0px] left-[0px] flex flex-col items-center justify-center py-0 px-20 box-border gap-[20px] md:pl-[30px] md:pr-[30px] md:box-border md:w-full md:top-[calc(44%_-_96.5px_-_0px)] sm:w-full sm:top-[calc(32%_-_96.5px_-_0px)]">
          <div className="self-stretch flex flex-col items-center justify-start">
            <div className="self-stretch relative leading-[67px] md:text-23xl md:leading-[48px] sm:text-12xl sm:leading-[40px]">
              Where are you off too?
            </div>
          </div>
          <FormInputsRowContainer
            propBorderRadius="10px"
            propBackgroundColor="#fff"
            propPadding="20px"
          />
        </div>
      </div>
    </div>
  );
};

SearchFormContainer.propTypes = {
  className: PropTypes.string,
};

export default SearchFormContainer;
