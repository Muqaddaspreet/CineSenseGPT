import React from "react";

const videoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-36 px-12 absolute text-white bg-gradient-to-r from-black my-1">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="py-6 text-lg md:w-1/4">{overview}</p>
      <div>
        <button className="w-3xs bg-white mr-3 text-black py-4 px-15 text-xl cursor-pointer font-bold rounded-md hover:bg-white/80">
          ▶️Play
        </button>
        <button className="w-3xs bg-gray-500/50 text-white py-4 px-15 text-xl cursor-pointer font-bold rounded-md my-2 hover:bg-black/80">
          ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default videoTitle;
