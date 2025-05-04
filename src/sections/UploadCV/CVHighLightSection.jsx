import React from "react";
import CustomButton from "../../components/CustomButton";
import { Link } from "react-router-dom";

const CVHighLightSection = () => {
  return (
    <div className="container max-w-7xl mx-auto flex flex-col items-center justify-center p-4 md:py-20">
      <div className="relative flex flex-col items-center justify-center md:h-[16rem] w-full bg-orange-primary rounded-lg md:rounded-3xl p-6 ">
        {/* assets */}
        <div className="absolute top-5 left-5">
          <img
            src="/image/subscription-pattern.svg"
            alt="subscription pattern"
            className="w-[6rem] h-[6rem] hidden md:block"
          />
        </div>
        {/* subscription title and input */}
        <div className="">
          <h4 className="text-xl md:text-h2 text-black-primary font-bold md:max-w-[47rem] text-center max-w-[34rem]">
            Don’t have any resume? Make your resume now
          </h4>
          <div className="flex flex-col md:flex-row items-center justify-center md:gap-6 gap-4 mt-6 ">
            <Link to={"/"} className="w-full md:w-fit">
              <CustomButton
                title={"Make my CV"}
                style={
                  "bg-black-primary text-white w-full md:max-w-fit rounded-md py-3"
                }
              />
            </Link>
          </div>
        </div>
        {/* subscription triangle pattern png  */}
        <div className="absolute bottom-0 right-0">
          <img
            src="/image/subscription-pattern-2.png"
            alt=""
            className="hidden md:w-[7rem] md:inline-block"
          />
        </div>
      </div>
    </div>
  );
};

export default CVHighLightSection;
