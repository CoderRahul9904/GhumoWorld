import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import SearchFormContainer from "../components/SearchFormContainer";
import SearchFilterContainer from "../components/SearchFilterContainer";
import FlightCardsContainer from "../components/FlightCardsContainer";
import NewsletterContainer from "../components/NewsletterContainer";
import Header from "../components/Header";

const ResultsPage = () => {

  return (
    <div className="relative bg-white w-full overflow-hidden flex flex-col items-start justify-start">
      <Header />
      <SearchFormContainer />
      <div className="self-stretch flex flex-row items-start justify-center py-[50px] px-20 lg:p-10 lg:box-border md:py-5 md:px-6 md:box-border">
        <SearchFilterContainer />
        <FlightCardsContainer />
      </div>
      <NewsletterContainer />
    </div>
  );
};

export default ResultsPage;
