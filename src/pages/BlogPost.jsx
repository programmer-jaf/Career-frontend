import React from "react";

const BlogPost = () => {
  return (
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      {/* Title */}
      <div className="text-center mb-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-gray-900">
          How to Start Looking for a UI/ <br className="hidden sm:block" />
          UX Design Job in 2023
        </h1>
      </div>

      {/* Image and Date */}
      <div className="relative max-w-3xl mx-auto my-8 md:my-16">
        <img
          src="/image/blogPost/blog-image-01.png"
          alt="Blog visual"
          className="w-full rounded-lg shadow-md object-cover"
        />
        <p className="absolute bottom-2 left-2 bg-white bg-opacity-80 text-p3 text-grey-primary px-3 py-1 rounded">
          May 5, 2025
        </p>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-3xl space-y-6 text-p3 text-grey-primary leading-relaxed">
        <p>
          In this post, we are going to cover the fundamental elements of job
          hunting in the world of UX. You will learn everything you need to know
          in regards to preparing for interviews, sending in applications, and
          building your UX portfolio.
        </p>
        <p>
          We are going to focus on some frequently asked questions first and
          provide you with some tips and tricks after that.
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
