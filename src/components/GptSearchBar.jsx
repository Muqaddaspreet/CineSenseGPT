import React from "react";
import { BG_URL } from "../utils/constants";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);

  return (
    <>
      {/*Background Image*/}
      <div>
        <img className="absolute z-15" src={BG_URL}></img>
      </div>
      <div className="flex justify-center">
        {/*Search form*/}
        <form className="z-50 mt-[9%] w-1/2 py-4 px-4  mx-6 bg-black shadow-2xl grid-cols-12 flex justify-center">
          <input
            type="text"
            className="h-10 col-span-9 px-4 py-2  mr-2  bg-white w-75 rounded-md"
            placeholder={lang[langKey].gptSearchPlaceholder} // Trying to put other languages.
          />
          <button className="h-10 col-span-3 py-2 px-4 rounded-lg bg-red-600 font-bold text-white hover:bg-red-600/80">
            {lang[langKey].search} {/* Trying to put other languages.*/}
          </button>
        </form>
      </div>
    </>
  );
};

export default GptSearchBar;
