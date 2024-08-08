import PropTypes from "prop-types";

const MatterhornPopup = ({ className = "", onClose }) => {
  return (
    <div
      className={`relative rounded-lg bg-white w-[900px] flex flex-col items-start justify-start p-5 box-border max-w-full max-h-full overflow-auto sm:p-2.5 sm:box-border ${className}`}
    >
      <iframe
        className="self-stretch relative h-[560px] sm:h-[50.625vw!important]"
        src={`https://www.youtube.com/embed/DJImX19wyLY?rel=0&autoplay=1&mute=1`}
        frameBorder="0"
        allowFullScreen
      />
    </div>
  );
};

MatterhornPopup.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
};

export default MatterhornPopup;
