import React from "react";

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center md:px-8">
      <img
        src="/public/image/404/pageNotFound.svg"
        className="md:w-1/2 h-fit"
        alt="Page Not Found"
      />
    </div>
  );
};

export default PageNotFound;
