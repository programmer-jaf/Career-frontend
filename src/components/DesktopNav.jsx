import React from 'react';
import { Link } from 'react-router-dom';
import { FaAngleDown } from 'react-icons/fa';
import { links } from '../constants/index.js';
import CustomButton from '../components/CustomButton.jsx';

const DesktopNav = () => {
  return (
    <nav className="hidden lg:flex items-center justify-between gap-x-8">
      {/* Static Links */}
      <div className="flex items-center gap-x-6">
        <Link to="/about" className="text-p2 text-grey-primary hover:text-black-primary">
          About
        </Link>
        <Link to="/featured-jobs" className="text-p2 text-grey-primary hover:text-black-primary">
          Latest Jobs
        </Link>
        <Link to="/upload-cv" className="text-p2 text-grey-primary hover:text-black-primary">
          Upload CV
        </Link>
        <Link to="/post-job" className="text-p2 text-grey-primary hover:text-black-primary">
          Post Job
        </Link>

        {/* Dropdown */}
        <div className="relative group inline-block">
          <button className="flex items-center gap-2 text-grey-primary hover:text-black-primary">
            Pages
            <FaAngleDown />
          </button>
          <div className="absolute left-0 z-10 mt-2 w-48 p-4 bg-white text-grey-primary shadow-lg ring-1 ring-black-primary ring-opacity-5 rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col gap-4">
            {links.map((link, index) => (
              <Link key={index} to={link.path} className="hover:text-black-primary">
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Auth Buttons */}
      <div className="flex items-center gap-4">
        <Link to="/sign-in">
          <CustomButton title="sign in" style="font-medium text-button2 text-black-primary" />
        </Link>
        <Link to="/sign-up">
          <CustomButton title="sign up" style="bg-black-primary text-white rounded-md" />
        </Link>
      </div>
    </nav>
  );
};

export default DesktopNav;
