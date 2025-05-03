import React from "react";

const VideoSection = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl md:px-8">
      <div className="">
        <img
          src="/image/Video.png"
          alt=""
          className="w-fit h-auto bg-cover my-4 md:my-12"
        />
        <div className="">
          <h3 className="text-h5 md:text-h4-r text-black-primary font-bold mt-4 md:max-w-[46rem] leading-snug mb-5">
            We are the next generation hiring platform helping employees and
            recruiter teams navigate their work and productivity with us.
          </h3>

          <div className="flex flex-col md:flex-row md:items-start md:justify-between md:gap-10 gap-5">
            <p className="text-p2 text-grey-primary md:w-1/2">
              We provide a platform that streamlines and expedites the job
              search, offering comprehensive resources, tailored
              recommendations, and advanced search capabilities. With Career,
              tech professionals can maximize their chances of finding the
              perfect job.
            </p>
            <p className="text-p2 text-grey-primary md:w-1/2">
              Career's mission is to revolutionize the job search process for
              tech professionals by empowering them to discover their ideal job
              opportunity quickly and effortlessly. We provide a platform that
              streamlines and expedites the job search, offering comprehensive
              resources, tailored recommendations, and advanced search
              capabilities. With Career, tech professionals can maximize their
              chances of finding the perfect job, enabling them to accelerate
              their career growth and achieve professional fulfillment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
