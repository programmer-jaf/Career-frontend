import React from "react";
import HeroSection from "../sections/About/HeroSection";
import NewCommunity from "../sections/About/NewCommunity";
import VideoSection from "../sections/About/VideoSection";

const AboutPage = () => {
  return (
    <div>
      <HeroSection />
      <NewCommunity />
      <VideoSection />
    </div>
  );
};

export default AboutPage;
