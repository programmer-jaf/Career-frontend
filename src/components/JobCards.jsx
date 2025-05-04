import React from "react";
import { LatestJobsByPopular } from "../constants/index.js";
import { FaMapMarkerAlt, FaClock } from "react-icons/fa";

const JobCards = () => {
  return (
    <div className="w-full px-4 sm:px-6 py-10 container max-w-7xl mx-auto">
      <div className="">
        {/* Job Cards */}
        <div className="grid grid-cols-1 gap-8">
          {LatestJobsByPopular.map((job, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300 ease-in-out flex flex-col justify-between"
            >
              {/* Top Section */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-4">
                <div className="flex items-center gap-4">
                  <div className="bg-light rounded-sm p-2">
                    <img
                      src={job.image}
                      alt={job.title}
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800">
                    {job.title}
                  </h4>
                </div>
                <button className="hidden sm:block border-2 border-black-primary hover:border-orange-primary px-8 text-gray-500 py-2 rounded-lg hover:bg-orange-primary hover:text-white transition duration-300">
                  Apply
                </button>
              </div>

              <p className="text-sm text-gray-600 mb-4">{job.description}</p>

              <div className="flex items-center gap-3 mb-4 flex-wrap">
                {job.title.includes("Part-time") ? (
                  <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-full">
                    Part-time
                  </span>
                ) : (
                  <span className="bg-light-yellow text-black-primary text-xs px-3 py-1 rounded-sm font-medium">
                    Full-time
                  </span>
                )}

                <div className="flex flex-wrap items-center gap-6 text-xs text-gray-600">
                  {job.location && (
                    <div className="flex items-center gap-1">
                      <FaMapMarkerAlt className="text-sm text-gray-500" />
                      <span>{job.location}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-1">
                    <FaClock className="text-sm text-gray-500" />
                    <span>Posted 3 days ago</span>
                  </div>
                </div>
              </div>

              <div className="h-0.5 my-5 w-[95%] bg-gray-200"></div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button className="block sm:hidden border-2 border-gray-500 text-gray-500 py-2 px-4 rounded-lg hover:bg-orange-primary hover:text-white transition duration-300 w-full">
                  Apply
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobCards;
