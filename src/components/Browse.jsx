import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import {
  TMDB_BASE_URL,
  TMDB_HEADERS,
  TMDB_ENDPOINTS,
} from "../utils/constants";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

const Browse = () => {
  useNowPlayingMovies(); // Note this one line will take care of everything.
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <div className="bg-black">
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/*
        MainContainer
          - VideoBackground
          - VideoTitle
        SecondaryContainer
          - MovieList *n
            - cards * n
      */}
    </div>
  );
};

export default Browse;
