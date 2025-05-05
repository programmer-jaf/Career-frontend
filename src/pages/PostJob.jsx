import React from "react";
import JobPostForm from "../sections/PostJobs/PostJobForm"; // Make sure this path is correct

const PostJob = () => {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-8">
      <div className="flex items-center justify-center flex-col gap-3 mb-8">
        <h1 className="text-h1 font-semibold">Post your job</h1>
        <p className="text-p2 text-grey-primary">
          Post a job to find the right talent for your company
        </p>
      </div>
      <JobPostForm />
    </div>
  );
};

export default PostJob;
