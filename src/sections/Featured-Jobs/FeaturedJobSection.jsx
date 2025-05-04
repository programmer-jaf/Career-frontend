import React from "react";
import JobCards from "../../components/JobCards";
import { Link } from "react-router-dom";
import LatestJobCards from "../../components/LatestJobCard";

const FeaturedJobSection = () => {
  return (
    <>
      <div className="container mx-auto max-w-7xl px-4 flex items-center justify-between md:px-8 my-4 md:flex-row">
        <h2 className="text-xl md:text-h2 text-black-primary font-bold my-4">
          Trending Jobs
        </h2>
        <div className="">
          <Link to="" className="text-base font-semibold underline">View All</Link>
        </div>
      </div>
      <JobCards />
      <div className="">
        <h3>

        </h3>
        {/*  */}
        <LatestJobCards/>
      </div>
    </>
  );
};

export default FeaturedJobSection;
