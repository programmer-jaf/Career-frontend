import React from 'react';
import { Link } from 'react-router-dom';
import DesktopNav from './DesktopNav.jsx';
import MobileMenu from './MobileNavigation.jsx';

const Header = () => {
  return (
    <header className="w-full">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 py-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/Logo.png" alt="Logo" className="h-8 w-auto" />
          <h2 className="text-h4 font-bold text-black">Career.</h2>
        </Link>

        {/* Desktop Navigation */}
        <DesktopNav />
        {/* mobile Navigation */}
        <MobileMenu/>
      </div>
    </header>
  );
};

export default Header;
