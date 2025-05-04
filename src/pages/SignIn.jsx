import React from 'react'
import CustomButton from '../components/CustomButton'
import { Link } from 'react-router-dom'
const SignIn = () => {
  return (
    <div>
      <div className="container max-w-7xl mx-auto px-4 py-8">
        <form
          action=""
          method="post"
          className="bg-white rounded-xl px-8 pt-6 pb-8 my-4 md:my-8 max-w-[36rem] mx-auto"
        >
          <h3 className="text-3xl font-semibold my-3 text-center ">Sign In</h3>
          <p className="text-p2 text-grey-primary mb-6 max-w-[22rem] text-center mx-auto">
            Find jobs, events and communities that celebrate your background.
          </p>
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
              <div className="my-3">
                <p className="text-p3 text-grey-primary mt-1 text-right hover:text-black-primary transition duration-200 hover:cursor-pointer hover:underline font-medium">
                  <Link to="/forgot-password" className="text-grey-primary my-3">
                    Forgot Password?
                  </Link>
                </p>
              </div>
            </div>
          </div>
          {/* button */}
          <div className="flex flex-col md:flex-row gap-4 mt-4">
            <div className="flex flex-col w-full">
              <CustomButton
                style="bg-orange-primary text-white rounded-md p-2 mt-1 hover:bg-orange-500 transition duration-200 hover:cursor-pointer font-semibold"
                title={"sign In"}
              />
            </div>
          </div>
          {/* already have an account */}
          <div className="my-5 text-center mx-auto">
            <p className="text-p3 text-grey-primary ">
            Don’t a have account? <Link to="/sign-up" className="text-orange-primary font-medium">Sign Up</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignIn
