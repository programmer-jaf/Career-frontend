import React from "react";
import CountrySelect from "../../components/CountrySelect"; // adjust path as needed
import "react-phone-input-2/lib/style.css";
import PhoneNumberInput from "../../components/PhoneInput";
import CustomButton from "../../components/CustomButton"; // adjust path as needed
const ResumeSection = () => {
  return (
    <div className="container max-w-7xl mx-auto flex flex-col items-center justify-center p-4 md:py-20">
      <h1 className="text-h2 font-bold text-black-primary">
        Create your resume
      </h1>
      <p className="text-grey-primary text-base my-4">
        Make your CV to ensure employers can easily find you
      </p>
      <div className="bg-white p-6 rounded-lg md:rounded-xl w-full md:w-2/3 shadow-sm md:my-16">
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
          {/* work experience */}
          <div className="">
            <h2 className="text-lg font-semibold my-3 text-black-primary">
              Work Experience
            </h2>
            {/* company name and job title */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex flex-col w-full">
                <label
                  htmlFor="company-name"
                  className="text-sm text-black-primary font-semibold"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  id="company-name"
                  name="company-name"
                  placeholder="Google"
                  className="border outline-none rounded-md p-2 mt-1"
                />
              </div>
              <div className="flex flex-col w-full">
                <label
                  htmlFor="job-title"
                  className="text-sm text-black-primary font-semibold"
                >
                  Job Title
                </label>
                <input
                  type="text"
                  id="job-title"
                  name="job-title"
                  placeholder="Software Engineer"
                  className="border outline-none rounded-md p-2 mt-1"
                />
              </div>
            </div>
            {/* country and job type */}
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
                  htmlFor="job-type"
                  className="text-sm text-black-primary font-semibold"
                >
                  Job Type
                </label>
                <input
                  type="text"
                  id="job-type"
                  name="job-type"
                  placeholder="Full Time"
                  className="border outline-none rounded-md p-2 mt-1"
                />
              </div>
            </div>
            {/* start date month and year */}
            <div className="flex flex-col md:flex-row gap-4 mt-4">
              <div className="flex flex-col w-full">
                <label
                  htmlFor="start-date"
                  className="text-sm text-black-primary font-semibold"
                >
                  Start Date
                </label>
                <input
                  type="date"
                  id="start-date"
                  name="start-date"
                  className="border outline-none rounded-md p-2 mt-1"
                />
              </div>
              <div className="flex flex-col w-full">
                <label
                  htmlFor="end-date"
                  className="text-sm text-black-primary font-semibold"
                >
                  End Date
                </label>
                <input
                  type="date"
                  id="end-date"
                  name="end-date"
                  className="border outline-none rounded-md p-2 mt-1"
                />
              </div>
            </div>
            {/* check-mark working here currently */}
            <div className="flex items-center gap-2 mt-6">
              <input
                type="checkbox"
                id="currently-working"
                name="currently-working"
                className="text-orange-primary accent-orange-primary border-grey-primary rounded-md focus:ring-orange-primary"
              />
              <label
                htmlFor="currently-working"
                className="text-sm text-gray-600 font-semibold select-none"
              >
                Currently Working Here
              </label>
            </div>
            {/* add experience button */}
            <div className="md:mt-6 mt-4">
              <CustomButton
                title="Add Another Work Experience"
                style={
                  "bg-orange-primary font-semibold text-base text-black-primary rounded-md py-3"
                }
              />
            </div>
            {/* Education */}
            <div className="">
              <h3 className="text-lg font-semibold my-3 text-black-primary">
                Your Education
              </h3>
              {/* degree type and school */}
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex flex-col w-full">
                  <label
                    htmlFor="degree-type"
                    className="text-sm text-black-primary font-semibold"
                  >
                    Degree Type
                  </label>
                  <input
                    type="text"
                    id="degree-type"
                    name="degree-type"
                    placeholder="Bachelor of Science"
                    className="border outline-none rounded-md p-2 mt-1"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label
                    htmlFor="school-name"
                    className="text-sm text-black-primary font-semibold"
                  >
                    School Name
                  </label>
                  <input
                    type="text"
                    id="school-name"
                    name="school-name"
                    placeholder="Harvard University"
                    className="border outline-none rounded-md p-2 mt-1"
                  />
                </div>
              </div>
              {/* subjective study and and graduation year */}
              <div className="flex flex-col md:flex-row gap-4 mt-4">
                <div className="flex flex-col w-full">
                  <label
                    htmlFor="subjective-study"
                    className="text-sm text-black-primary font-semibold"
                  >
                    Subjective Study
                  </label>
                  <input
                    type="text"
                    id="subjective-study"
                    name="subjective-study"
                    placeholder="Computer Science"
                    className="border outline-none rounded-md p-2 mt-1"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label
                    htmlFor="graduation-year"
                    className="text-sm text-black-primary font-semibold"
                  >
                    Graduation Year
                  </label>
                  <input
                    type="date"
                    id="graduation-year"
                    name="graduation-year"
                    className="border outline-none rounded-md p-2 mt-1"
                  />
                </div>
              </div>
              {/* check-mark for currently enrolled */}
              <div className="flex items-center gap-2 mt-6">
                <input
                  type="checkbox"
                  id="currently-working"
                  name="currently-working"
                  className="text-orange-primary accent-orange-primary border-grey-primary rounded-md focus:ring-orange-primary"
                />
                <label
                  htmlFor="currently-working"
                  className="text-sm text-gray-600 font-semibold select-none"
                >
                  I am currently enrolled
                </label>
              </div>
              {/* add experience button */}
              <div className="md:my-6 my-4">
                <CustomButton
                  title="Add Another School"
                  style={
                    "bg-orange-primary font-semibold text-base text-black-primary rounded-md py-3"
                  }
                />
              </div>
              {/* status */}
              <div className="">
                <h3 className="text-lg font-semibold my-3 text-black-primary">
                  Select your status
                </h3>
                <p className="text-sm  text-grey-primary max-w-[21rem]">
                  How would you like your profile/resume to be
                  displayed to employers searching our database?
                </p>
                {/* 1st check-mark */}
                <div className="flex items-center gap-2 mt-6">
                  <input
                    type="checkbox"
                    id="currently-working"
                    name="currently-working"
                    className="text-orange-primary accent-orange-primary border-grey-primary rounded-md focus:ring-orange-primary"
                  />
                  <label
                    htmlFor="currently-working"
                    className="text-sm text-gray-600 font-semibold select-none"
                  >
                    Visible to employers
                  </label>
                </div>
                {/* 2nd check mark */}
                <div className="flex items-center gap-2 mt-6">
                  <input
                    type="checkbox"
                    id="currently-working"
                    name="currently-working"
                    className="text-orange-primary accent-orange-primary border-grey-primary rounded-md focus:ring-orange-primary"
                  />
                  <label
                    htmlFor="currently-working"
                    className="text-sm text-gray-600 font-semibold select-none"
                  >
                    Hide name & contact
                  </label>
                </div>
                {/* 3rd check mark */}
                <div className="flex items-center gap-2 mt-6">
                  <input
                    type="checkbox"
                    id="currently-working"
                    name="currently-working"
                    className="text-orange-primary accent-orange-primary border-grey-primary rounded-md focus:ring-orange-primary"
                  />
                  <label
                    htmlFor="currently-working"
                    className="text-sm text-gray-600 font-semibold select-none"
                  >
                    Not visible to employers
                  </label>
                </div>
              </div>
            </div>
          </div>
          {/* submit button */}
          <div className="md:my-6 my-4">
            <CustomButton
              title="Create Resume"
              style={
                "bg-orange-primary font-semibold text-base text-black-primary rounded-md py-3"
              }
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResumeSection;
