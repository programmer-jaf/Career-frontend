import React from "react";

const HeroSection = () => {
  return (
    <>
      {/* Hero Container - Matches NewCommunity */}
      <div className="container max-w-7xl mx-auto px-4 md:px-0 my-14 md:my-20">
        {/* Heading Section */}
        <div className="flex flex-col items-center text-center">
          <h1 className="text-3xl md:text-h2 font-bold md:max-w-4xl relative">
            <span className="inline-block max-w-[40rem]">
              We are transforming the way people hire
            </span>
            <img
              src="/image/arrow.svg"
              alt="arrow"
              className="h-4 md:h-6 inline-block md:absolute md:bottom-0 md:right-0 md:translate-y-1/2"
            />
          </h1>
          <p className="text-base md:text-lg text-grey-primary mt-6">
            We built a leading platform that connects employers with top
            healthcare professionals across the country.
          </p>
        </div>

        {/* Image and Text Content */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-16 gap-16">
          {/* Image Block */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="bg-pink-primary p-8 rounded-2xl overflow-hidden w-full max-w-md">
              <img
                src="/image/about.svg"
                alt="About us"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Text Block */}
          <div className="w-full md:w-1/2">
            <p className="text-sm text-grey-primary mb-2">Our Mission</p>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Our Mission is to empower every tech professional
            </h2>
            <p className="text-p3 text-grey-primary leading-relaxed">
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
    </>
  );
};

export default HeroSection;
