import React, { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Send email to backend for password reset
    console.log("Reset link sent to:", email);
  };

  return (
    <div className="container max-w-7xl md:py-18 py-12 flex items-center justify-center bg-[#f4f1e9] px-4">
      <div className="w-full max-w-md bg-white rounded-lg p-8 shadow-md">
        <h2 className="text-2xl font-semibold text-black mb-2">
          Reset Password
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          We will send you a link to reset your password
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="text-sm font-medium text-black mb-2"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-400 hover:bg-orange-500 text-white font-semibold py-3 rounded-md transition"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
