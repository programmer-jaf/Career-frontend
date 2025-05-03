import React from "react";
import CountUp from "react-countup";
import { newComunitiesCount } from "../constants/index.js";

const CommunityCounter = () => {
  return (
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
      {newComunitiesCount.map((item, index) => (
        <div key={index} className="flex flex-col items-center bg-white p-3 rounded-lg">
          <h3 className="text-3xl md:text-4xl font-bold text-black-primary">
            <CountUp 
              end={item.title} 
              duration={2} 
              separator="," 
            />
            <span className="text-black-primary">{item.prefix}</span>
          </h3>
          <p className="text-grey-primary mt-2 text-base md:text-lg">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CommunityCounter;
