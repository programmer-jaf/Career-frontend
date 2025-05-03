import React from "react";
import { meetTeamData } from "../../constants";

const MeetTeam = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl md:px-8">
      <h3 className="text-h3 text-black-primary text-center font-bold mb-8">
        Meet the team
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
        {meetTeamData.map((item) => (
          <div key={item.id} className="text-center">
            <div className={`w-fit aspect-square bg-cover rounded-xl ${item.style}`}>
              <img
                src={item.image}
                alt={item.name}
                className="h-auto mx-auto object-cover pt-5"
              />
            </div>
            <h4 className="text-xl text-black-primary font-bold mt-4">
              {item.name}
            </h4>
            <p className="text-p3 text-gray-600">{item.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetTeam;
