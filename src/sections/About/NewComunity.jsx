import React from "react";
import CommunityCounter from "../../constants/index";

const NewCommunity = () => {
  return (
    <section className="">
      <div className="container mx-auto max-w-7xl px-4 md:px-0 py-12">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">
          
          {/* Text Section */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-h2 font-bold mb-4">
              Our community in numbers
            </h2>
            <p className="text-p3 text-grey-primary">
              We provide a platform that streamlines and expedites the job search,
              offering comprehensive resources, tailored recommendations, and
              advanced search capabilities. With Career, tech professionals can
              maximize their chances of finding the perfect job.
            </p>
            <CommunityCounter/>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 flex justify-center">
            <div className="bg-blue-primary rounded-lg shadow-md overflow-hidden w-full max-w-md">
              <img
                src="/image/comunity/image.png"
                alt="Community illustration"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewCommunity;
