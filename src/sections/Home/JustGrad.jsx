import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const JustGrad = () => {
  const links = [
    { text: "Visit the new grad hub", to: "/new-grad-hub" },
    { text: "Search salaries by major", to: "/salaries-by-major" },
    { text: "Get a free resume assessment", to: "/resume-assessment" },
    { text: "Search entry level jobs", to: "/entry-level-jobs" },
  ];

  return (
    <div className="w-full container max-w-7xl mx-auto px-4 md:px-0 py-10">
      <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-10">
        {/* Image Section */}
        <div className="relative bg-orange-primary px-6 py-4 rounded-lg w-full max-w-sm flex-shrink-0">
          <img
            src="/image/Graduation.png"
            alt="Graduation illustration"
            className="w-fit object-contain"
          />
          <div className="absolute -top-10 -right-6">
            <img src="/image/help.svg" alt="Help icon" className="w-12" />
          </div>
        </div>

        {/* Text & Links Section */}
        <div className="w-full lg:max-w-2xl">
          <h2 className="text-h2 font-semibold text-black-primary mb-2">
            Just graduating? We can <br /> help.
          </h2>
          <p className="text-grey-primary text-p2 mb-6">
            We ensure your next step is a step forward. That's why we built a
            jobs marketplace that serves all kinds of professionals first.
          </p>

          <div className="flex flex-col gap-4">
            {links.map((link, index) => (
              <Link
                key={index}
                to={link.to}
                className="group font-semibold text-black-primary flex items-center justify-between max-w-md"
              >
                <span>{link.text}</span>
                <div className="bg-white group-hover:bg-orange-primary p-2 rounded-full transition-transform duration-300">
                  <FaArrowRight className="text-lg transform -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JustGrad;
