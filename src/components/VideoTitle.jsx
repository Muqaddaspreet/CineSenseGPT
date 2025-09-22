import React from "react";

const videoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-26 lg:pt-30 xl:pt-36 px-12 absolute text-white bg-gradient-to-r from-black my-1">
      <h1 className="text-xl md:text-4xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-1 md:py-6 text-sm md:text-lg w-full md:w-2/3 lg:w-1/4">
        {overview}
      </p>
      <div className="my-7 md:my-0 justify-center">
        <button className="w-24 md:w-40 lg:w-3xs bg-white mr-2 text-black py-1 md:py-4 px-auto text-sm md:text-xl cursor-pointer font-bold rounded-md hover:bg-white/80">
          ▶️Play
        </button>
        <button className="w-24 md:w-40 lg:w-3xs bg-gray-500/50 text-white py-1 md:py-4 px-auto text-sm md:text-xl cursor-pointer font-bold rounded-md my-2 hover:bg-black/80">
          ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default videoTitle;
