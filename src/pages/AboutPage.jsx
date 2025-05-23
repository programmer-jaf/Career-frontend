import React from "react";
import HeroSection from "../sections/About/HeroSection";
import NewCommunity from "../sections/About/NewCommunity";
import VideoSection from "../sections/About/VideoSection";
import MeetTeam from "../sections/About/MeetTeam";
import FeaturesSection from "../sections/About/FeaturesSection";

const AboutPage = () => {
  return (
    <div>
      <HeroSection />
      <NewCommunity />
      <VideoSection />
      <MeetTeam/>
      <FeaturesSection/>
    </div>
  );
};

export default AboutPage;
