import React, { useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";
import FilterDrawer from "./FilterDrawer"; // adjust the path if needed

const HeroSection = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="relative">
      {/* Reusable Filter Drawer */}
      <FilterDrawer isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)} />

      {/* Main Hero Content */}
      <div className="container max-w-7xl mx-auto px-4 py-16">
        <div className="flex items-center justify-center flex-col text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold max-w-3xl leading-tight">
            Find the world’s best exciting jobs
          </h1>
          <p className="text-sm sm:text-base mt-4 max-w-2xl text-grey-primary">
            The best place to discover & apply to the coolest startup jobs.
            More than 672,800 current vacancies from 17,750 sites available to you.
          </p>

          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row items-stretch mt-8 gap-3 w-full max-w-3xl">
            <div className="flex items-center bg-white rounded-md w-full px-4 h-14">
              <input
                type="text"
                placeholder="Job title, Salary, or Companies..."
                className="border-none outline-none text-base text-grey-primary placeholder:text-grey-primary w-full h-full"
              />
              <button className="bg-orange-primary rounded h-10 w-10 flex items-center justify-center">
                <IoSearch className="text-black-primary w-6 h-6" />
              </button>
            </div>

            <button
              onClick={() => setIsFilterOpen(true)}
              className="bg-white rounded-md flex items-center justify-center gap-2 px-4 h-14 w-full sm:w-auto"
            >
              <HiMenuAlt2 className="text-xl" />
              <span className="text-black-primary text-base font-semibold">
                Filters
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
