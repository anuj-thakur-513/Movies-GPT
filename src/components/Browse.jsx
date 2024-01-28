import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <MainContainer />
      <SecondaryContainer />
      {/* 
      Main Container
        - Video Background
        - Video Title
      Secondary Container
        - Movies List * n
          - Cards * n
    */}
    </div>
  );
};

export default Browse;
