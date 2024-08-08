import Header from "../components/Header";
import LosAngelesContainer from "../components/LosAngelesContainer";
import HotelResultsContainer from "../components/HotelResultsContainer";
import WeeklyUpdatesContainer from "../components/WeeklyUpdatesContainer";

const HotelsPage = () => {
  return (
    <div className="relative bg-white w-full overflow-hidden flex flex-col items-start justify-start">
      <Header />
      <LosAngelesContainer />
      <HotelResultsContainer />
      <WeeklyUpdatesContainer
        imageDimensions="/newsletter-section-background1@2x.png"
        imageId="/logo2.svg"
        thumbnailDimensions="/social-icons2.svg"
      />
    </div>
  );
};

export default HotelsPage;
