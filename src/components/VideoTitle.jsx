import React from "react";

const videoTitle = ({ title, overview }) => {
  return (
    <div className="pt-36 px-12">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div>
        <button className="bg-gray-100 mr-3 text-black py-4 px-15 text-xl cursor-pointer font-bold bg-opacity-50 rounded-md">
          ▶️Play
        </button>
        <button className="bg-gray-100 text-black py-4 px-15 text-xl cursor-pointer font-bold bg-opacity-50 rounded-md">
          ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default videoTitle;
