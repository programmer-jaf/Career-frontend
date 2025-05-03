import React from "react";
import { newComunitiesCount } from "../../constants/index.js";

const CommunityCounter = () => {
  return (
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
      {newComunitiesCount.map((item, index) => (
        <div key={index} className="flex flex-col items-center">
          <h3 className="text-3xl md:text-4xl font-bold text-blue-primary">
            {item.title}
            <span className="text-blue-primary">{item.prefix}</span>
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
