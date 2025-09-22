import React, { useEffect } from "react";
import {
  TMDB_BASE_URL,
  TMDB_HEADERS,
  TMDB_ENDPOINTS,
} from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/moviesSlice";

const useTopRatedMovies = () => {
  // Fetch data from TMDB API and update store.
  const dispatch = useDispatch();

  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);

  const getNowPlayingMovies = async (page = 1) => {
    const data = await fetch(
      `${TMDB_BASE_URL}/top_rated?${TMDB_ENDPOINTS.movieChanges(page)}`,
      { headers: TMDB_HEADERS }
    );
    if (!data.ok) throw new Error(`TMDB error ${data.status}`);
    const json = await data.json();
    console.log(json?.results);
    // Dispatching an action
    dispatch(addTopRatedMovies(json?.results));
  };
  useEffect(() => {
    // If we have topRatedMovies in the store, we will not make an api call.
    !topRatedMovies && getNowPlayingMovies();
  }, []);
};

export default useTopRatedMovies;
