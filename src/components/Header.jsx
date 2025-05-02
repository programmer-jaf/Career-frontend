import React from 'react'
import {Link} from "react-router-dom";
import DesktopNav from "./DesktopNav.jsx";

const Header = () => {
  return (
      <header className="flex items-center justify-between px-5 py-8 container mx-auto"
      >
      {/*  logo*/}
        <Link to={"/"} className="flex items-center gap-1">
          <img src="./Logo.png" alt="Logo" />
          <h2 className="text-h4 font-bold">Career.</h2>
        </Link>
      {/*  Desktop Nav*/}
        <DesktopNav/>
      {/*  */}
      </header>
  )
}
export default Header