import React from "react";
import HeroSection from "../sections/Home/HeroSection";
import GetStarted from "../sections/Home/GetStarted";
import JustGrad from "../sections/Home/JustGrad";
import DreamCompanies from "../sections/Home/PopularCompanies";
import LatestJobs from "../sections/Home/LatestJobs";
import PopularQuote from "../sections/Home/PopularQuote";
import CareerAdvice from "../sections/Home/CareerAdvice";
import Subscription from "../components/Subscription";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <GetStarted />
      <JustGrad />
      <DreamCompanies />
      <LatestJobs />
      <PopularQuote />
      <CareerAdvice />
      <Subscription />
    </div>
  );
};

export default HomePage;
