import React from "react";

const HeroSection = () => {
  return (
    <div className="container max-w-7xl mx-auto px-4 my-12 overflow-hidden">
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-h3 w-full md:text-h1 font-bold md:max-w-[59rem] relative text-center overflow-hidden">
          <span className="inline-block">
            We are transforming the way people hires
          </span>
          <img
            src="/image/arrow.svg"
            alt="arrow"
            className="h-4 md:h-6 inline-block md:absolute md:bottom-0 md:right-0 md:translate-y-1/2"
          />
        </h1>
        <p className="text-p1 mt-6 text-grey-primary">
          We built a leading platform that connects employers with top
          healthcare professionals across the country.
        </p>
      </div>

      {/* Flex Layout: One row on desktop, image first on mobile */}
      <div className="flex flex-col md:flex-row items-center justify-between mt-16 gap-8">
        {/* Image First */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="bg-pink-primary p-8 rounded-2xl overflow-hidden">
            <img src="/image/about.svg" alt="About us" className="max-w-full h-auto" />
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <p className="text-p4 text-grey-primary leading-tight">Our Mission</p>
          <h2 className="text-h2">
            Our Mission is to empower every tech professional
          </h2>
          <p className="text-p3 text-grey-primary">
            Career's mission is to revolutionize the job search process for tech
            professionals by empowering them to discover their ideal job
            opportunity quickly and effortlessly. We provide a platform that
            streamlines and expedites the job search, offering comprehensive
            resources, tailored recommendations, and advanced search
            capabilities. With Career, tech professionals can maximize their
            chances of finding the perfect job, enabling them to accelerate
            their career growth and achieve professional fulfillment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
