import HeroContainer from "../components/HeroContainer";
import UpcomingFlightContainer from "../components/UpcomingFlightContainer";
import PopularDestinationsContainer from "../components/PopularDestinationsContainer";
import RecommendedHolidaysContainer from "../components/RecommendedHolidaysContainer";
import PopularStaysForm from "../components/PopularStaysForm";
import WeeklyUpdatesContainer from "../components/WeeklyUpdatesContainer";

const Homepage = () => {
  
  return (
    <div className="relative bg-white w-full overflow-hidden flex flex-col items-center justify-start gap-[69px] hover:[background:linear-gradient(#fff,_#fff),_#87550a] sm:w-full sm:hover:bg-orange-200">
      <HeroContainer />
      <div className="w-full flex flex-col items-center justify-start py-0 px-20 box-border gap-[80px] max-w-[1280px] md:pl-[30px] md:pr-[30px] md:box-border">
        <UpcomingFlightContainer />
        <PopularDestinationsContainer />
        <RecommendedHolidaysContainer />
        <PopularStaysForm />
      </div>
      <WeeklyUpdatesContainer
        imageDimensions="/subscribe-section-background@2x.png"
        imageId="/logo.svg"
        thumbnailDimensions="/social-icons.svg"
      />
    </div>
  );
};

export default Homepage;
