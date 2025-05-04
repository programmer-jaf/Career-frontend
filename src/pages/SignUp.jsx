import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "../components/CustomButton";

const SignUp = () => {
  return (
    <div>
      <div className="container max-w-7xl mx-auto px-4 py-8">
        <form
          action=""
          method="post"
          className="bg-white rounded-xl px-8 pt-6 pb-8 my-4 md:my-8 max-w-[36rem] mx-auto"
        >
          <h3 className="text-3xl font-semibold my-3 text-center ">Sign Up</h3>
          <p className="text-p2 text-grey-primary mb-6 max-w-[22rem] text-center mx-auto">
            Find jobs, events and communities that celebrate your background.
          </p>
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
                placeholder="Programmer"
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
                placeholder="Jaf"
                className="border outline-none rounded-md p-2 mt-1"
              />
            </div>
          </div>

          {/* email */}
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
          </div>
          {/* password */}
          <div className="flex flex-col md:flex-row gap-4 mt-4">
            <div className="flex flex-col w-full">
              <label
                htmlFor="email"
                className="text-sm text-black-primary font-semibold"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="border outline-none rounded-md p-2 mt-1"
                placeholder="******"
              />
            </div>
          </div>
          {/* confirm password */}
          <div className="flex flex-col md:flex-row gap-4 mt-4">
            <div className="flex flex-col w-full">
              <label
                htmlFor="email"
                className="text-sm text-black-primary font-semibold"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm-password"
                name="confirm-password"
                className="border outline-none rounded-md p-2 mt-1"
                placeholder="******"
              />
            </div>
          </div>
          {/* button */}
          <div className="flex flex-col md:flex-row gap-4 mt-4">
            <div className="flex flex-col w-full">
              <CustomButton
                style="bg-orange-primary text-white rounded-md p-2 mt-1 hover:bg-orange-500 transition duration-200"
                title={"sign up"}
              />
            </div>
          </div>
          {/* terms and condition */}
          <div className="my-5">
            <p className="text-p3 text-grey-primary ">
              By clicking “Sign up” you’re agreeing to our{" "}
              <Link to={""} className="hover:underline">
                Terms & Conditions.
              </Link>
            </p>
          </div>
          {/* already have an account */}
          <div className="my-5 text-center mx-auto">
            <p className="text-p3 text-grey-primary ">
              Already have an account?{" "}
              <Link
                to={"/sign-in"}
                className="text-orange-primary hover:underline"
              >
                Log in
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
