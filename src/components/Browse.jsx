import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import {
  TMDB_BASE_URL,
  TMDB_HEADERS,
  TMDB_ENDPOINTS,
} from "../utils/constants";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies(); // Note this one line will take care of everything.
  return (
    <div>
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
