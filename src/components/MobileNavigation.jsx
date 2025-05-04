import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaAngleDown } from 'react-icons/fa';
import { links } from '../constants/index.js';
import CustomButton from './CustomButton.jsx';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="lg:hidden">
      {/* Top bar with hamburger */}
      <div className="flex items-center justify-between px-4 py-3">
        <button onClick={() => setIsOpen(true)} className="text-2xl text-black-primary">
          <FaBars />
        </button>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-30 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Slide-in Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[20rem] bg-white shadow-lg z-50 p-5 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close button */}
        <div className="flex justify-end">
          <button onClick={() => setIsOpen(false)} className="text-2xl text-black-primary">
            <FaTimes />
          </button>
        </div>

        {/* Nav Links */}
        <div className="mt-6 space-y-4">
          <Link to="/about" className="block text-grey-primary hover:text-black-primary" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link to="/featured-jobs" className="block text-grey-primary hover:text-black-primary" onClick={() => setIsOpen(false)}>
            Latest Jobs
          </Link>
          <Link to="/upload-cv" className="block text-grey-primary hover:text-black-primary" onClick={() => setIsOpen(false)}>
            Upload CV
          </Link>
          <Link to="/post-job" className="block text-grey-primary hover:text-black-primary" onClick={() => setIsOpen(false)}>
            Post Job
          </Link>

          {/* Dropdown for pages */}
          <div>
            <button
              className="flex items-center gap-2 text-grey-primary hover:text-black-primary"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              Pages <FaAngleDown className={`${showDropdown ? 'rotate-180' : ''} transition-transform`} />
            </button>
            {showDropdown && (
              <div className="ml-4 mt-2 space-y-2">
                {links.map((link, index) => (
                  <Link
                    key={index}
                    to={link.path}
                    className="block hover:text-black-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Auth Buttons */}
          <div className="flex flex-col gap-2 pt-4">
            <Link to="/sign-in" onClick={() => setIsOpen(false)}>
              <CustomButton title="sign in" style="w-full text-button2 text-black-primary" />
            </Link>
            <Link to="/sign-up" onClick={() => setIsOpen(false)}>
              <CustomButton title="sign up" style="w-full bg-black-primary text-white rounded-md" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
