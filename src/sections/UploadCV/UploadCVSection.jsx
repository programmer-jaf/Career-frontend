import React from "react";

const UploadCVSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between container mx-auto max-w-7xl px-4 my-8 md:my-16 gap-12">
      {/* Left Text Section */}
      <div className="flex-1">
        <h1 className="text-h3 md:text-h1 font-bold text-black-primary max-w-[36rem]">
          Upload your resume to get the best
        </h1>
        <p className="md:text-p1 text-grey-primary mt-4 max-w-[36rem]">
          Post your resume on Career today to ensure recruiters and hiring
          managers can easily find you.
        </p>

        <p className="text-base text-black-primary font-semibold mt-6">
          By uploading your resume, you'll also:
        </p>
        <ul className="text-p2 text-grey-primary mt-4 list-disc list-inside space-y-2">
          <li>Receive recommended jobs in your inbox</li>
          <li>Be able to easily apply for thousands of jobs</li>
          <li>Receive a free professional assessment of your resume</li>
        </ul>
      </div>

      {/* Upload Section */}
      <div className="flex-1 w-full bg-white rounded-lg shadow-md p-6">
        <p className="text-p2 font-semibold mb-4 md:text-left">
          Add files or drop files here
        </p>

        {/* Upload Box */}
        <div className="bg-yellow-primary rounded-lg p-10 w-full text-center">
          <label htmlFor="file-upload" className="cursor-pointer inline-block">
            <img
              src="/Upload.png"
              alt="Upload"
              className="mx-auto w-16 h-16 object-contain"
            />
          </label>
          <input id="file-upload" type="file" className="hidden" />
        </div>

        <p className="text-base font-semibold my-6">Upload from</p>

        {/* Upload Services */}
        <div className="space-y-4">
          {/* Google Drive */}
          <button className="flex items-center justify-between w-full border rounded-lg p-3 bg-white hover:bg-gray-50 transition">
            <span className="text-grey-primary">Google Drive</span>
            <img
              src="/image/logos/google-drive.svg"
              alt="Google Drive"
              className="w-6 h-6"
            />
          </button>

          {/* Dropbox */}
          <button className="flex items-center justify-between w-full border rounded-lg p-3 bg-white hover:bg-gray-50 transition">
            <span className="text-grey-primary">Dropbox</span>
            <img
              src="/image/logos/dropbox.svg"
              alt="Dropbox"
              className="w-6 h-6"
            />
          </button>

          {/* OneDrive */}
          <button className="flex items-center justify-between w-full border rounded-lg p-3 bg-white hover:bg-gray-50 transition">
            <span className="text-grey-primary">Microsoft OneDrive</span>
            <img
              src="/image/logos/one-drive.svg"
              alt="OneDrive"
              className="w-6 h-6"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadCVSection;