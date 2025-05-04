import React from "react";
import { FaFacebookF, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { footerGridData1, footerGridData2, footerGridData3, footerGridData4 } from "../constants";


const Footer = () => {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {/* part 01 */}
        <div className="">
          <div className="flex items-center mb-2 md:mb-2">
            <img src="/Logo.png" alt="Career Logo" />
            <p className="text-h4-r font-semibold">Career.</p>
          </div>
          <p className="text-p2 text-grey-primary">
            The best place to discover & apply to the coolest start up jobs.
          </p>
        </div>
        {/* part 02 */}
        <div className="flex flex-col gap-1">
          <h5 className="text-h5 font-semibold mb-2">Partner with us</h5>
          {footerGridData1.map((item) => (
            <div key={item.id} className="mb-4">
              <ul className="">
                <Link className="text-p2 text-grey-primary">{item.title}</Link>
              </ul>
            </div>
          ))}
        </div>

        {/* part 03 */}
        <div className="flex flex-col gap-1">
          <h5 className="text-h5 font-semibold mb-2">Career</h5>
          {footerGridData2.map((item) => (
            <div key={item.id} className="mb-4">
              <ul className="">
                <Link className="text-p2 text-grey-primary">{item.title}</Link>
              </ul>
            </div>
          ))}
        </div>
        {/* part 04 */}
        <div className="flex flex-col gap-1">
          <h5 className="text-h5 font-semibold mb-2">Jobs</h5>
          {footerGridData3.map((item) => (
            <div key={item.id} className="mb-4">
              <ul className="">
                <Link className="text-p2 text-grey-primary">{item.title}</Link>
              </ul>
            </div>
          ))}
        </div>
        {/* part 05 */}
        <div className="flex flex-col gap-1">
          <h5 className="text-h5 font-semibold mb-2">Help</h5>
          {footerGridData4.map((item) => (
            <div key={item.id} className="mb-4">
              <ul className="">
                <Link className="text-p2 text-grey-primary">{item.title}</Link>
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* add horizontal line */}
      <div className="h-0.5 w-full bg-grey-primary opacity-20 my-6"></div>

      {/* add social icons */}
      <div className="flex md:items-center justify-between flex-col md:flex-row gap-4">
        <div className="flex items-center gap-3">
          <FaFacebookF className="text-4xl bg-white p-2 hover:bg-orange-primary transition duration-300 cursor-pointer rounded" />
          <div className="">
            <Link to="https://www.github.com/programmer-jaf">
            <FaGithub className="text-4xl bg-white p-2 hover:bg-orange-primary transition duration-300 cursor-pointer rounded" />
            </Link>
          </div>
          <FaTwitter className="text-4xl bg-white p-2 hover:bg-orange-primary transition duration-300 cursor-pointer rounded" />
          <FaInstagram className="text-4xl bg-white p-2 hover:bg-orange-primary transition duration-300 cursor-pointer rounded" />
        </div>
        {/* credit */}
        <div className="text-p2 text-grey-primary text-center">
          © {new Date().getFullYear()} All rights reserved. Made with ❤️ by{" "}
          Programmer-Jaf
        </div>
      </div>
    </div>
  );
};

export default Footer;
