import WeeklyUpdatesContainer from "./WeeklyUpdatesContainer";
import PropTypes from "prop-types";

const NewsletterContainer = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start ${className}`}
    >
      <WeeklyUpdatesContainer
        imageDimensions="/newsletter-section-background@2x.png"
        imageId="/logo1.svg"
        thumbnailDimensions="/social-icons1.svg"
      />
    </div>
  );
};

NewsletterContainer.propTypes = {
  className: PropTypes.string,
};

export default NewsletterContainer;
