import { TMDB_HEADERS } from "../utils/constants";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  //Fetching the trailer video.
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      { headers: TMDB_HEADERS }
    ); // Here, we are re-using the headers from the constants.js.
    const json = await data.json();
    console.log(json);

    const trailers = json.results.filter((video) => video.type === "Trailer");
    const trailer = trailers.length ? trailers[0] : json.results[0]; // We select the first trailer in case we have 2, and the first video be it any teasor/clip in case theno trailer.
    console.log(trailer);
    dispatch(addTrailerVideo(trailer)); // Thsi is to put to the store.
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;
