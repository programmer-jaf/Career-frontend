import React from "react";
import { LatestBlog } from "../../constants";
import { Link } from "react-router-dom";

const LatestBlogs = () => {
  return (
    <div className="container max-w-7xl mx-auto px-4 py-16">
      <h3 className="text-h3 text-black-primary md:max-w-[27rem] font-semibold">
        Discover our latest articles and insights.
      </h3>

      {/* Grid layout for blog cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {LatestBlog.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-lg overflow-hidden p-4 shadow-md"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover rounded-lg"
            />
            <div className="my-4">
              <div className="my-3">
                <p className="bg-light-yellow w-fit p-2 text-sm font-semibold text-black-primary">
                  {blog.tag}
                </p>
              </div>
              <h4 className="text-lg text-black-primary font-semibold mb-2">
                {blog.title}
              </h4>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 my-4">
                  <img
                    src={blog.authImage}
                    alt={blog.author}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm text-black-primary">{blog.author}</p>
                    <p className="text-sm text-grey-primary">{blog.date}</p>
                  </div>
                </div>
                <Link
                  to={blog.link}
                  className="text-black-primary font-semibold underline"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestBlogs;
