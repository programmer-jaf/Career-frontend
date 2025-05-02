import React from "react";
import { CiSearch } from "react-icons/ci";
import CustomButton from "../../components/CustomButton.jsx";
import { companyLogo } from "../../constants/index.js";

const HeroSection = () => {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Content Container */}
      <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-center gap-6 my-14 md:my-20">
        {/* Left Hero Logo */}
        <div className="hidden md:block flex-shrink-0 w-24 md:w-36">
          <img
            src="/image/Hero/hero-logo-left.svg"
            alt="Left Logo"
            className="w-full"
          />
        </div>

        {/* Hero Text Content */}
        <div className="my-4 md:my-8 flex-1 min-w-[280px] text-center">
          <h1 className="text-h3-sb md:text-h1 text-black-primary capitalize font-bold">
            Your new job, vacancies <br />
            all over the world
          </h1>
          <p className="text-grey-primary my-6 text-p2 md:text-p1">
            The best place to discover & apply to the coolest start up jobs.
            More than <br />
            672,800 current vacancies from 17,750 sites available to you.
          </p>

          {/* Search and Button */}
          <div className="flex flex-col md:flex-row gap-5 items-center justify-center">
            <div className="flex items-center gap-5 bg-white w-full md:w-[400px] px-6 py-3 rounded-md shadow-md">
              <CiSearch className="w-6 h-6 text-black-primary" />
              <input
                type="search"
                name="search"
                id="search"
                placeholder="Job title, Salary, or Companies..."
                className="outline-none w-full"
              />
            </div>
            <CustomButton
              title="Explore Now"
              style="bg-orange-primary font-medium px-6 py-3 w-full md:w-fit rounded-md"
            />
          </div>
        </div>

        {/* Right Hero Logo */}
        <div className="hidden md:block flex-shrink-0 w-24 md:w-36">
          <img
            src="/image/Hero/Hero-logo-right.svg"
            alt="Right Logo"
            className="w-full"
          />
        </div>
      </div>

      {/* Hero Image Section */}
      <div className="flex justify-center my-8 px-4">
        <div className="w-full max-w-4xl">
          <img
            src="/image/Hero/Hero-Image.png"
            alt="Hero"
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Company Logos Scroll Section */}
      <div className="flex items-center justify-around gap-6 md:gap-[4rem] bg-orange-primary py-6 overflow-x-auto px-4 scrollbar-hide">
        {companyLogo.map((logo) => (
          <img
            key={logo.id}
            src={logo.logo}
            alt={`Company ${logo.id}`}
            className="w-24 flex-shrink-0 md:w-fit"
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
