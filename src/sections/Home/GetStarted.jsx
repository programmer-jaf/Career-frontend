import React from "react";
import { Counter, getStarted } from "../../constants/index.js";
import CountUp from "react-countup";

const GetStarted = () => {
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 my-12 md:my-16">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Heading and Subtext */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <h2 className="text-h2 font-bold text-black-primary">
            The fast track to your <br />
            next job
          </h2>
          <p className="text-grey-primary text-p2 md:text-p1 max-w-2xl">
            We ensure your next step is a step forward. That's why we built a
            jobs <br />
            marketplace that serves all kinds of professionals first.
          </p>
        </div>

        {/* Get Started Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {getStarted.map((component, index) => (
            <div
              key={index}
              className={`${component.style} px-8 py-6 rounded-md flex flex-col items-center gap-4`}
            >
              <div className="flex items-center justify-center">
                <img
                  src={component.image}
                  alt={component.heading}
                  className="w-fit"
                />
              </div>
              <h3 className="text-h5 font-medium text-black-primary">
                {component.heading}
              </h3>
              <p className="text-p2 text-grey-primary text-center">
                {component.paragraph}
              </p>
              <button className="capitalize font-semibold text-black-primary">
                Get started
              </button>
            </div>
          ))}
        </div>

        {/* Counter Section */}
        <div className="bg-green-primary rounded-lg">
  <div className="flex flex-col md:grid md:grid-cols-4 px-6 md:px-12 py-8 text-center gap-y-6 md:gap-y-0">
    {Counter.map((component, index) => (
      <div
        key={index}
        className={`w-full px-4 ${
          index !== Counter.length - 1 ? "md:border-r md:border-grey-primary" : ""
        }`}
      >
        <h4 className="text-h3 font-bold text-black-primary">
          <CountUp
            end={component.count}
            duration={2}
            prefix={component.prefix || ""}
            suffix={component.suffix || ""}
          />
        </h4>
        <p className="text-p3 font-normal text-black-primary">
          {component.paragraph}
        </p>
      </div>
    ))}
  </div>
</div>


      </div>
    </div>
  );
};

export default GetStarted;
