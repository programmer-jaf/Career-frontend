import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CustomButton from "../components/CustomButton";
import axiosInstance from "../api/axiosInstance.js";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      setIsSubmitting(true);
      await axiosInstance.post("/auth/signup", {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
        role: formData.role,
      });

      // Optional: Disable email input here after signup
      // setFormData(prev => ({ ...prev, emailDisabled: true }));

      navigate("/sign-in");
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <div className="container max-w-7xl mx-auto px-4 py-8">
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl px-8 pt-6 pb-8 my-4 md:my-8 max-w-[36rem] mx-auto"
        >
          <h3 className="text-3xl font-semibold my-3 text-center">Sign Up</h3>
          <p className="text-p2 text-grey-primary mb-6 max-w-[22rem] text-center mx-auto">
            Find jobs, events and communities that celebrate your background.
          </p>

          {/* first and last name */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex flex-col w-full">
              <label
                htmlFor="firstName"
                className="text-sm text-black-primary font-semibold"
              >
                First Name
              </label>
              <input
                type="text"
                id="first-name"
                name="firstName"
                placeholder="Programmer"
                value={formData.firstName}
                onChange={handleChange}
                className="border outline-none rounded-md p-2 mt-1"
              />
            </div>
            <div className="flex flex-col w-full">
              <label
                htmlFor="lastName"
                className="text-sm text-black-primary font-semibold"
              >
                Last Name
              </label>
              <input
                type="text"
                id="last-name"
                name="lastName"
                placeholder="Jaf"
                value={formData.lastName}
                onChange={handleChange}
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
                placeholder="jaf@gmail.com"
                value={formData.email}
                onChange={handleChange}
                className="border outline-none rounded-md p-2 mt-1"
              />
            </div>
          </div>

          {/* password */}
          <div className="flex flex-col md:flex-row gap-4 mt-4">
            <div className="flex flex-col w-full">
              <label
                htmlFor="password"
                className="text-sm text-black-primary font-semibold"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="******"
                value={formData.password}
                onChange={handleChange}
                className="border outline-none rounded-md p-2 mt-1"
              />
            </div>
          </div>

          {/* confirm password */}
          <div className="flex flex-col md:flex-row gap-4 mt-4">
            <div className="flex flex-col w-full">
              <label
                htmlFor="confirmPassword"
                className="text-sm text-black-primary font-semibold"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm-password"
                name="confirmPassword"
                placeholder="******"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="border outline-none rounded-md p-2 mt-1"
              />
            </div>
          </div>

          {/* select role */}
          <div className="flex flex-col md:flex-row gap-4 mt-4">
            <div className="flex flex-col w-full">
              <label
                htmlFor="role"
                className="text-sm text-black-primary font-semibold"
              >
                Select Role
              </label>
              <select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="border outline-none rounded-md p-2 mt-1"
              >
                <option value="" disabled>
                  Select your role
                </option>
                <option value="job-seeker">Job Seeker</option>
                <option value="recruiter">Recruiter</option>
              </select>
            </div>
          </div>

          {/* button */}
          <div className="flex flex-col md:flex-row gap-4 mt-4">
            <div className="flex flex-col w-full">
              <CustomButton
                type="submit"
                style="bg-orange-primary text-white rounded-md p-2 mt-1 hover:bg-orange-500 transition duration-200"
                title={isSubmitting ? "Signing up..." : "Sign Up"}
              />
            </div>
          </div>

          {/* terms */}
          <div className="my-5">
            <p className="text-p3 text-grey-primary">
              By clicking “Sign up” you’re agreeing to our{" "}
              <Link to={""} className="hover:underline">
                Terms & Conditions.
              </Link>
            </p>
          </div>

          {/* already have an account */}
          <div className="my-5 text-center mx-auto">
            <p className="text-p3 text-grey-primary">
              Already have an account?{" "}
              <Link
                to="/sign-in"
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
