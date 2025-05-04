import React from "react";
import CountrySelect from "../../components/CountrySelect"; // adjust path as needed
import "react-phone-input-2/lib/style.css";
import PhoneNumberInput from "../../components/PhoneInput";

const ResumeSection = () => {
  return (
    <div className="container max-w-7xl mx-auto flex flex-col items-center justify-center p-4 md:py-20">
      <h1 className="text-h2 font-bold text-black-primary">
        Create your resume
      </h1>
      <p className="text-grey-primary text-base my-4">
        Make your CV to ensure employers can easily find you
      </p>
      <div className="bg-white p-6 rounded-lg w-full md:w-2/3 shadow-md">
        <form action="" method="post">
          <h3 className="text-xl font-semibold my-3 ">Personal Information</h3>
          {/* first and last name */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex flex-col w-full">
              <label
                htmlFor="name"
                className="text-sm text-black-primary font-semibold"
              >
                First Name
              </label>
              <input
                type="text"
                id="first-name"
                name="first-name"
                placeholder="Jon"
                className="border outline-none rounded-md p-2 mt-1"
              />
            </div>
            <div className="flex flex-col w-full">
              <label
                htmlFor="email"
                className="text-sm text-black-primary font-semibold"
              >
                Last Name
              </label>
              <input
                type="text"
                id="last-name"
                name="last-name"
                placeholder="Deo"
                className="border outline-none rounded-md p-2 mt-1"
              />
            </div>
          </div>
          {/* Country and City,State */}
          <div className="flex flex-col md:flex-row gap-4 mt-4">
            <div className="flex flex-col w-full">
              <label
                htmlFor="country"
                className="text-sm text-black-primary font-semibold"
              >
                Country
              </label>
              <CountrySelect />
            </div>
            <div className="flex flex-col w-full">
              <label
                htmlFor="city-state"
                className="text-sm text-black-primary font-semibold"
              >
                City, State
              </label>
              <input
                type="text"
                id="city-state"
                name="city-state"
                placeholder="Dhaka, Bangladesh"
                className="border outline-none rounded-md p-2 mt-1"
              />
            </div>
          </div>
          {/* Street and Zip code */}
          <div className="flex flex-col md:flex-row gap-4 mt-4">
            <div className="flex flex-col w-full">
              <label
                htmlFor="street"
                className="text-sm text-black-primary font-semibold"
              >
                Street
              </label>
              <input
                type="text"
                id="street"
                name="street"
                className="border outline-none rounded-md p-2 mt-1"
                placeholder="College Road, 2nd Floor"
              />
            </div>
            <div className="flex flex-col w-full">
              <label
                htmlFor="zip-code"
                className="text-sm text-black-primary font-semibold"
              >
                Zip Code
              </label>
              <input
                type="number"
                id="zip-code"
                name="zip-code"
                inputMode="numeric"
                pattern="[0-9]*"
                placeholder="1234"
                className="border outline-none rounded-md p-2 mt-1"
              />
            </div>
          </div>
          {/* email and phone */}
          <div className="flex flex-col md:flex-row gap-4 mt-4">
            <div className="flex flex-col w-full">
              <label
                htmlFor="email"
                className="text-sm text-black-primary font-semibold"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="border outline-none rounded-md p-2 mt-1"
                placeholder="jaf@gmail.com"
              />
            </div>
            <div className="flex flex-col w-full">
              <label
                htmlFor="phone"
                className="text-sm text-black-primary font-semibold"
              ></label>
              <PhoneNumberInput
                inputClass="!w-full !border !rounded-md !p-2 !mt-1"
                buttonClass="!border !rounded-l-md"
              />
            </div>
          </div>
          {/* TODO: start work from here */}
        </form>
      </div>
    </div>
  );
};

export default ResumeSection;
