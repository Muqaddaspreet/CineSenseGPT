import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  console.log(movieId);

  useMovieTrailer(movieId);

  return (
    <div>
      <iframe
        src={
          "https://www.youtube.com/embed/p4aWdkM5xF8?si=NOVYp_r2NRsYGy6R" +
          trailerVideo?.key // This comed from the store.
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
