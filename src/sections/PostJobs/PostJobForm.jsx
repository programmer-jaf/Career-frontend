import React, { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";

const PostJob = () => {
  return (
    <div className="container mx-auto max-w-7xl px-4">
      <JobPostForm />
    </div>
  );
};

const JobPostForm = () => {
  const [logoPreview, setLogoPreview] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setLogoPreview(URL.createObjectURL(file));
    }
  };

  return (
    <form className="max-w-4xl mx-auto mt-10 p-6 md:p-10 bg-white rounded-lg shadow space-y-6">
      <h2 className="text-2xl font-semibold text-black">
        Fill the Information
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input label="First Name" placeholder="First Name" />
        <Input label="Last Name" placeholder="Last Name" />
        <Input label="Business Email" placeholder="Business Email" />
        <Input label="Phone Number" placeholder="Phone Number" />
        <Input label="Company Name" placeholder="Company Name" />
        <Select
          label="Number of Employees"
          options={["0–10", "11–50", "51–200", "200+"]}
        />

        <Input label="Job Title" placeholder="Job Title" />
        <Select
          label="Job Category"
          options={["Design", "Development", "Marketing"]}
        />
        <Select
          label="Job Type"
          options={["Full-Time", "Part-Time", "Internship"]}
        />
        <Input label="Location" placeholder="Location" />
        <Select
          label="Employment Type"
          options={["Remote", "On-site", "Hybrid"]}
        />
        <Input label="Address Line" placeholder="Address Line" />
        <Select
          label="Salary Range"
          options={["$500", "$1000", "$2000", "$5000+"]}
        />
        <Select
          label="Salary Based"
          options={["Monthly", "Yearly", "Hourly"]}
        />

        {/* File Upload */}
        <div className="md:col-span-2">
          <label className="text-black font-medium mb-2 block">
            Upload Company Logo
          </label>
          <div
            onClick={() => document.getElementById("company-logo").click()}
            className="border border-dashed rounded-lg h-40 flex justify-center items-center text-orange-500 cursor-pointer hover:bg-orange-50 transition relative"
          >
            {logoPreview ? (
              <img
                src={logoPreview}
                alt="Preview"
                className="h-full object-contain rounded-lg"
              />
            ) : (
              <FaCloudUploadAlt className="text-3xl" />
            )}
          </div>
          <input
            id="company-logo"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
          />
        </div>

        {/* Textareas */}
        <Textarea
          label="About the Company"
          placeholder="Write a few words about the company..."
        />
        <Textarea
          label="About the Job"
          placeholder="Write a few words about the job..."
        />
        <Textarea
          label="Requirement"
          placeholder="Write a few lines about the job requirements..."
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-semibold"
      >
        Let’s Submit
      </button>
    </form>
  );
};

// Helper Components
const Input = ({ label, placeholder }) => (
  <div className="flex flex-col">
    <label className="text-black font-medium mb-2">{label}</label>
    <input
      type="text"
      placeholder={placeholder}
      className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-300"
    />
  </div>
);

const Select = ({ label, options }) => (
  <div className="flex flex-col">
    <label className="text-black font-medium mb-2">{label}</label>
    <select className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-300">
      {options.map((opt, idx) => (
        <option key={idx} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  </div>
);

const Textarea = ({ label, placeholder }) => (
  <div className="flex flex-col md:col-span-2">
    <label className="text-black font-medium mb-2">{label}</label>
    <textarea
      placeholder={placeholder}
      rows={4}
      className="border rounded-lg p-3 resize-none focus:outline-none focus:ring-2 focus:ring-orange-300"
    ></textarea>
  </div>
);

export default PostJob;
