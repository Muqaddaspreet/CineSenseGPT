import React from "react";
import { useSelector } from "react-redux";

import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return; // This is also known as early return.

  console.log(movies); //  So we'll have 20 movies to enter this main container, But do we really need 20 movies we just need one For the trailer.
  const mainMovie = movies[0];
  console.log(mainMovie);

  const { original_title, overview, id } = mainMovie;
  console.log(original_title, overview, id);

  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
