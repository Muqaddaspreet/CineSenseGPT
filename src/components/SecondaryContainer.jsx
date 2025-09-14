import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  console.log("Secondary", movies);
  return (
    movies.nowPlayingMovies && ( // We can put a check that only returns secondary component if we have movies data present.
      <div className="md:-mt-80 relative z-20">
        {" "}
        {/* For providing the z-index, we need too give the relative property.*/}
        <MovieList title={"NowPlaying"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
        <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
        <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />
        {/*
      MovieLiest - Popular
        MovieCard*n
      MovieLiest - NowPlaying
      MovieLiest - Trending
      MovieLiest - Horror
    */}
      </div>
    )
  );
};

export default SecondaryContainer;
