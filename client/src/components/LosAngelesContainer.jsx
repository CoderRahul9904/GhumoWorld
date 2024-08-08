import PropTypes from "prop-types";

const LosAngelesContainer = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start text-left text-23xl text-white font-baloo-bhai ${className}`}
    >
      <div className="self-stretch relative [background:linear-gradient(100.3deg,_#0b5ba8,_#299bd8)] h-[193px] lg:py-[21px] lg:pr-10 lg:pl-[41px] lg:box-border md:py-[21px] md:px-6 md:box-border">
        <img
          className="absolute h-[calc(100%_-_0.4px)] w-full top-[0.4px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/banner-background@2x.png"
        />
        <div className="absolute top-[50px] left-[0px] w-[1440px] flex flex-col items-start justify-start py-0 px-20 box-border gap-[8px] lg:pl-10 lg:pr-10 lg:box-border md:pl-6 md:pr-6 md:box-border">
          <div className="relative tracking-[0.02em] leading-[48px] inline-block w-[1280px] sm:text-13xl">
            Stays in Los Angeles
          </div>
          <div className="flex flex-row items-start justify-start gap-[8px] text-center text-base font-roboto">
            <div className="rounded-8xl bg-white flex flex-row items-center justify-center py-[11px] px-[21px] text-cornflowerblue-200 border-[1px] border-solid border-white">
              <div className="relative tracking-[0.04em] capitalize font-medium sm:text-sm">
                Recommended
              </div>
            </div>
            <div className="rounded-8xl flex flex-row items-center justify-center py-[11px] px-[21px] border-[1px] border-solid border-white">
              <div className="relative tracking-[0.04em] capitalize font-medium sm:text-sm">
                Price
              </div>
            </div>
            <div className="rounded-8xl flex flex-row items-center justify-center py-[11px] px-[21px] border-[1px] border-solid border-white">
              <div className="relative tracking-[0.04em] capitalize font-medium sm:text-sm">
                Rating
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

LosAngelesContainer.propTypes = {
  className: PropTypes.string,
};

export default LosAngelesContainer;
