import React from 'react';
import CustomButton from '../../components/CustomButton';
import { Link } from 'react-router-dom';

const DreamCompanies = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-20 my-16">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Text Content */}
        <div className="w-full md:max-w-xl">
          <h3 className="text-h2 font-bold mb-4">
            Find your dream jobs in best companies
          </h3>
          <p className="text-p2 text-grey-primary mb-6">
            We don’t believe that we’ve found the holy grail of tech combinations.
            Instead, we believe that you should always explore better and new
            tech. We challenge you to bring new ideas to the board.
          </p>
          <Link to="/sign-up">
            <CustomButton
              title={"sign up now"}
              style={"bg-orange-primary font-semibold rounded-md py-3"}
            />
          </Link>
        </div>

        {/* Image */}
        <div className="w-full md:max-w-md">
          <img
            src="/image/Top-Companies.svg"
            alt="Top Companies"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default DreamCompanies;
