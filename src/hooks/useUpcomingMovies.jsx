import React, { useEffect } from "react";
import {
  TMDB_BASE_URL,
  TMDB_HEADERS,
  TMDB_ENDPOINTS,
} from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";

const useUpcomingMovies = () => {
  // Fetch data from TMDB API and update store.
  const dispatch = useDispatch();

  const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);

  const getUpcomingMovies = async (page = 1) => {
    const data = await fetch(
      `${TMDB_BASE_URL}/upcoming?${TMDB_ENDPOINTS.movieChanges(page)}`,
      { headers: TMDB_HEADERS }
    );
    if (!data.ok) throw new Error(`TMDB error ${data.status}`);
    const json = await data.json();
    console.log(json?.results);
    // Dispatching an action
    dispatch(addUpcomingMovies(json?.results));
  };
  useEffect(() => {
    // If we have upcomingMovies in the store, we will not make an api call.
    !upcomingMovies && getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
