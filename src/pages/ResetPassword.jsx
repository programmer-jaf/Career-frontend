import React from "react";

export default function ResetPasswordConfirmation() {
  return (
    <div className="min-h-screen bg-[#f5f3eb] flex flex-col items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-2xl font-semibold text-gray-900">Reset Password</h1>
        <p className="text-sm text-gray-600 mt-2">
          We will send you a link to reset your password
        </p>
        <div className="mt-6 bg-white rounded-md shadow-sm px-6 py-4 inline-block">
          <p className="text-sm text-gray-800">
            Thank you! Your submission has been received
          </p>
        </div>
      </div>
    </div>
  );
}
