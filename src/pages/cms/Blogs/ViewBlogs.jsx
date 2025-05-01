import React from "react";

const ViewBlog = ({ post }) => {
  return (
    <div className="dark:bg-layout-dark bg-layout-light text-white  rounded shadow-md  gap-4 ">
      <div>
        <img
          alt="Blog"
          className=" rounded mb-4 border border-gray-700"
        />
      </div>
      <div className="grid ">
      <div className="flex justify-between items-start w-full mt-4">
        <p className="text-sm text-purple-300"></p>
       
      </div>

      <h1 className="text-xl font-bold mt-1 ">: Causes....</h1>

      {/* Description */}
      <div className="text-sm text-gray-200 leading-relaxed ">
      
      </div>
      </div>
    </div>
  );
};

export default ViewBlog;
