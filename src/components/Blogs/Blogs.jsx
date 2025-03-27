import React from "react";
import Heading from "../Shared/Header.jsx";

const Blogs = ({data}) => {
  return (
    <div className="my-12">
      <div className="container">
        {/* Header section   */}
        <Heading title="Recent News" subtitle={"Explore Our Blogs"} />

        {/* Blog section   */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 ,d:gap-7">
          {/* BLog Card  */}
          {data.map((data) => (
            <div key={data.title} className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-md">
              {/* image section  */}
              <div className="overflow-hidden rounded-2xl mb-2">
                <img src={data.image} alt="" className="w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500" />
              </div>
              {/* content section  */}
              <div className="space-y-2">
                <p className="text-xs text-gray-500">{data.published}</p>
                <p className="line-clamp-2 text-sm text-gray-600 dark:text-gray-400">{data.title}</p>
                <p>{data.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
