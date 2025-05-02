import React from "react";
import CustomButton from "../../components/CustomButton";
import { careerAdvice } from "../../constants";

const CareerAdvice = () => {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <h4 className="text-black-primary text-h2 font-semibold max-w-2xl">
          Top Career Advice, News & Articles
        </h4>
        <CustomButton
          title={"Browse Advice"}
          style="bg-orange-primary px-8 py-3 hidden md:block rounded-lg text-black-primary text-base font-semibold"
        />
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {careerAdvice.map((item, index) => (
          <div
            key={index}
            className="flex flex-col bg-white rounded-2xl shadow-sm overflow-hidden"
          >
            {/* Image */}
            <div className={`${item.style}`}>
              <img
                src={item.image}
                alt={item.title}
                className="w-fit mx-auto mt-4 h-[16rem] object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col justify-between h-full">
              {/* Category */}
              <span className="bg-light-yellow text-black-primary text-xs font-semibold px-3 py-1 rounded-sm w-fit">
                {item.tag}
              </span>

              {/* Title */}
              <h4 className="text-black-primary text-h4 font-semibold mt-4 leading-snug">
                {item.title}
              </h4>

              {/* Author & Meta */}
              <div className="flex items-center justify-between mt-6">
                <div className="flex items-center gap-2">
                  <img
                    src={item.authImage}
                    alt={item.author}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div className="flex flex-col leading-tight">
                    <p className="text-black-primary text-sm font-semibold">
                      {item.author}
                    </p>
                    <p className="text-gray-500 text-xs">{item.date}</p>
                  </div>
                </div>
                <p className="text-sm font-semibold text-black-primary cursor-pointer hover:underline">
                  Read More
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* add button for mobile view */}
      <div className="flex md:hidden items-center justify-center mt-8">
        <CustomButton
          title={"Browse Advice"}
          style="bg-orange-primary px-8 py-3 rounded-lg text-black-primary text-base font-semibold w-full"
        />
      </div>
    </div>
  );
};

export default CareerAdvice;
