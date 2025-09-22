import React, { useEffect } from "react";
import {
  TMDB_BASE_URL,
  TMDB_HEADERS,
  TMDB_ENDPOINTS,
} from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";

const usePopularMovies = () => {
  // Fetch data from TMDB API and update store.
  const dispatch = useDispatch();

  const popularMovies = useSelector((store) => store.movies.popularMovies);

  const getPopularMovies = async (page = 1) => {
    const data = await fetch(
      `${TMDB_BASE_URL}/popular?${TMDB_ENDPOINTS.movieChanges(page)}`,
      { headers: TMDB_HEADERS }
    );
    if (!data.ok) throw new Error(`TMDB error ${data.status}`);
    const json = await data.json();
    console.log(json?.results);
    // Dispatching an action
    dispatch(addPopularMovies(json?.results));
  };
  useEffect(() => {
    // If we have nowPlayingMovies in the store, we will not make an api call.
    !popularMovies && getPopularMovies();
  }, []);
};

export default usePopularMovies;
