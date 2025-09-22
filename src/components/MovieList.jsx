import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  //   console.log("MovieList", movies);
  return (
    <div className="pl-6">
      <h1 className="text-lg mx-2 md:text-3xl text-white">{title}</h1>
      <div className="flex overflow-x-auto scrollbar-hidden">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie?.id} posterPath={movie?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
