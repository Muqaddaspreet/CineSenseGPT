import React, { useRef } from "react";
import { BG_URL, TMDB_HEADERS } from "../utils/constants";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const searchmovieTMDB = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=+ ${movie} +&include_adult=false&language=en-US&page=1`,
      { headers: TMDB_HEADERS }
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    // Make an api call to gpt api and get movie results
    const gptQuery =
      " Act as a movie recommendation system and suggest some movies for the query" +
      searchText.current.value +
      ". Only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Demon Slayer:  The infinity castle, The Conjouring." +
      "The queary will be similar to something like funny indian retro movies. You just provide movie names withour question.";
    const gptResults = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "developer", content: gptQuery }],
    });
    if (!gptResults.choices) {
      // TODO: Write Error Handling
    }
    console.log(gptResults.choices?.[0]?.message.content);
    const gptMovies = gptResults.choices?.[0]?.message.content.split(",");

    // For each movie we will search tmdb api:
    const promiseArray = gptMovies.map((movie) => searchmovieTMDB(movie));
    // We will get [Promise, Promise, Promise, Promise,Promise]
    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);

    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  return (
    <>
      {/*Background Image*/}
      <div>
        <img className="absolute z-15 h-screen object-cover" src={BG_URL}></img>
      </div>
      <div className="flex justify-center pt-[19%] md:pt-[3%]">
        {/*Search form*/}
        <form
          className="z-50 mt-[9%] w-full md:w-1/2 py-4 px-4 bg-black shadow-2xl grid-cols-12 flex justify-center"
          onSubmit={(e) => e.preventDefault()} // To prevent reload on the click of the submit button in the form.
        >
          <input
            ref={searchText}
            type="text"
            className="h-10 col-span-9 px-4 py-2  mr-2  bg-white w-75 rounded-md"
            placeholder={lang[langKey].gptSearchPlaceholder} // Trying to put other languages.
          />
          <button
            className="h-10 col-span-3 py-2 px-4 rounded-lg bg-red-600 font-bold text-white hover:bg-red-600/80 cursor-pointer"
            onClick={handleGptSearchClick}
          >
            {lang[langKey].search} {/* Trying to put other languages.*/}
          </button>
        </form>
      </div>
    </>
  );
};

export default GptSearchBar;
