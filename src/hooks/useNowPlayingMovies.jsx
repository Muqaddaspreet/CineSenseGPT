import React, { useEffect } from "react";
import {
  TMDB_BASE_URL,
  TMDB_HEADERS,
  TMDB_ENDPOINTS,
} from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {
  // Fetch data from TMDB API and update store.
  const dispatch = useDispatch();

  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );

  const getNowPlayingMovies = async (page = 1) => {
    const data = await fetch(
      `${TMDB_BASE_URL}/now_playing?${TMDB_ENDPOINTS.movieChanges(page)}`,
      { headers: TMDB_HEADERS }
    );
    if (!data.ok) throw new Error(`TMDB error ${data.status}`);
    const json = await data.json();
    console.log(json?.results);
    // Dispatching an action
    dispatch(addNowPlayingMovies(json?.results));
  };
  useEffect(() => {
    // If we have nowPlayingMovies in the store, we will not make an api call.
    !nowPlayingMovies && getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
