import React from "react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import CustomButton from "../components/CustomButton";
import Subscription from "../components/Subscription";

const ContactPage = () => {
  return (
    <>
    <div className="container max-w-7xl mx-auto px-4 my-16 flex flex-col lg:flex-row gap-16 items-start">
      {/* Left Text + Contact Info */}
      <div className="flex-1">
        <h1 className="text-h2 text-black-primary font-bold max-w-[31rem]">
          Hi. 👋 how can we help you?
        </h1>
        <p className="text-p2 text-grey-primary max-w-[27rem] mt-4">
          Let’s talk with us about various kinds of topics and more about job
          and recruitment.
        </p>

        <div className="mt-16">
          <h3 className="text-h4 font-bold text-black-primary mb-6">
            Contact Details
          </h3>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-xl text-black-primary" />
              <p className="text-grey-primary text-p2">(+127) 06409483</p>
            </div>

            <div className="flex items-center gap-4">
              <FaEnvelope className="text-xl text-black-primary" />
              <p className="text-grey-primary text-p2">
                programmerjaf@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Form */}
      <form
        action=""
        method="post"
        className="flex-1 w-full grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* First Name */}
        <div className="flex flex-col">
          <label
            htmlFor="first-name"
            className="text-xl font-semibold text-black-primary mb-2"
          >
            First Name
          </label>
          <input
            type="text"
            id="first-name"
            name="first-name"
            className="border rounded-lg p-3 focus:outline-none w-full"
            placeholder="First Name"
          />
        </div>

        {/* Last Name */}
        <div className="flex flex-col">
          <label
            htmlFor="last-name"
            className="text-xl font-semibold text-black-primary mb-2"
          >
            Last Name
          </label>
          <input
            type="text"
            id="last-name"
            name="last-name"
            className="border rounded-lg p-3 focus:outline-none w-full"
            placeholder="Last Name"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label
            htmlFor="email"
            className="text-xl font-semibold text-black-primary mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="border rounded-lg p-3 focus:outline-none w-full"
            placeholder="Your Email"
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col">
          <label
            htmlFor="phone"
            className="text-xl font-semibold text-black-primary mb-2"
          >
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="border rounded-lg p-3 focus:outline-none w-full"
            placeholder="Your Phone"
          />
        </div>

        {/* Subject - Full Width */}
        <div className="flex flex-col md:col-span-2">
          <label
            htmlFor="subject"
            className="text-xl font-semibold text-black-primary mb-2"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="border rounded-lg p-3 focus:outline-none w-full"
            placeholder="Your Subject"
          />
        </div>

        {/* Role - Full Width */}
        <div className="flex flex-col md:col-span-2">
          <label
            htmlFor="role"
            className="text-xl font-semibold text-black-primary mb-2"
          >
            Role
          </label>
          <input
            type="text"
            id="role"
            name="role"
            className="border rounded-lg p-3 focus:outline-none w-full"
            placeholder="Your Role"
          />
        </div>

        {/* Message - Full Width */}
        <div className="flex flex-col md:col-span-2">
          <label
            htmlFor="message"
            className="text-xl font-semibold text-black-primary mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="border rounded-lg p-3 focus:outline-none w-full resize-none"
            placeholder="Your Message"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2">
          <CustomButton
            title={"Let's Submit"}
            style={
              "bg-orange-primary text-white px-6 py-3 font-semibold rounded-md w-full md:w-fit"
            }
          />
        </div>
      </form>
      {/* add subscription component */}
    </div>
      <Subscription/>
      </>
  );
};

export default ContactPage;
