import React from "react";
import { popularBlogsData } from "../../constants";
import { Link } from "react-router-dom";

const HeroBlogSection = () => {
  return (
    <section className="container mx-auto px-4 my-8 md:my-16 max-w-7xl">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Main Blog Feature */}
        <div className="md:col-span-2 bg-white shadow-lg rounded-2xl p-6 flex flex-col gap-4 h-full">
          <img
            src="/image/blogs/Image.png"
            alt="Main Blog"
            className="w-full rounded-2xl object-cover"
          />
          <span className="bg-light-yellow text-sm font-medium px-3 py-1 rounded-full w-fit">
            Assessment
          </span>
          <h2 className="text-2xl md:text-3xl font-bold leading-snug">
            How to Start Looking for a UI/UX Design Job in 2023
          </h2>
          <div className="flex items-center gap-4 flex-wrap">
            <img
              src="/image/author.png"
              alt="Author"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="font-medium">David Milter</p>
              <p className="text-sm text-gray-500">20 March, 2025</p>
            </div>
            <Link
              to=""
              className="ml-auto text-grey-primary font-semibold underline text-sm"
            >
              Read more
            </Link>
          </div>
        </div>

        {/* Popular Blogs (3 Equal Height Cards) */}
        <div className="flex flex-col gap-6 h-full">
          {popularBlogsData.slice(0, 3).map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-4 flex flex-col gap-3 flex-1 h-full"
            >
              <h3 className="text-lg md:text-xl font-semibold">{item.title}</h3>
              <span className="bg-light-yellow text-xs font-medium px-3 py-1 rounded-full w-fit">
                {item.tag}
              </span>
              <div className="flex items-center justify-between flex-wrap gap-2 mt-auto">
                <div className="flex items-center gap-3">
                  <img
                    src={item.authImage}
                    alt={item.author}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-medium">{item.author}</p>
                    <p className="text-xs text-gray-500">{item.date}</p>
                  </div>
                </div>
                <Link
                  to=""
                  className="text-grey-primary text-sm font-semibold underline"
                >
                  Read more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroBlogSection;
