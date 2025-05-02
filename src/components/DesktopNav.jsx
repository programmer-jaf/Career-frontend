import React from "react";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import { links } from "../constants/index.js";
import CustomButton from "./CustomButton.jsx";

const DesktopNav = () => {
  return (
    <nav className="hidden lg:flex items-center gap-4">
      <Link to="/about" className="text-p2 text-grey-primary">
        About
      </Link>
      <Link to="/featured-jobs" className="text-p2 text-grey-primary">
        Latest Jobs
      </Link>
      <Link to="/upload-cv" className="text-p2 text-grey-primary">
        Upload CV
      </Link>
      <Link to="/post-job" className="text-p2 text-grey-primary">
        Post Job
      </Link>
      <div className="relative group inline-block">
        <button className="flex items-end gap-2 justify-end text-grey-primary">
          Pages
          <span className="">
            <FaAngleDown />
          </span>
        </button>
        <div className="absolute p-4 left-0 z-10 mt-2 w-48 rounded-md bg-white text-grey-primary shadow-lg ring-1 ring-black-primary ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col gap-4">
          {links.map((link, index) => (
            <Link key={index} to={link.path}>
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      {/*  Sign in and Sign Up*/}
      <div className="">
        <Link to="/sign-in">
          <CustomButton
            title={"sign in"}
            style={"font-medium text-button2 text-black-primary"}
          />
        </Link>
        <Link to="/sign-up">
          <CustomButton
            title={"sign Up"}
            style={"bg-black-primary text-white rounded-md"}
          />
        </Link>
      </div>
    </nav>
  );
};
export default DesktopNav;
