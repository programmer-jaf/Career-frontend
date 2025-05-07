import React from "react";
import { useParams } from "react-router-dom";
import { LatestJobsByPopular } from "../constants/index.js";

const JobDescription = () => {
  const { id } = useParams();
  const job = LatestJobsByPopular.find((job) => job.id === id);

  if (!job)
    return <div className="p-6 text-center text-red-500">Job not found</div>;

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-4">{job.title}</h1>
      <p className="text-gray-600 mb-4">{job.description}</p>
      <p className="text-gray-500 mb-2">Location: {job.location}</p>

      {/* You can add an apply form or CTA here */}
      <button className="mt-6 bg-orange-primary text-white px-6 py-2 rounded hover:bg-orange-600 transition">
        Apply Now
      </button>
    </div>
  );
};

export default JobDescription;
