import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  if (!movies) {
    return;
  }

  return (
    <div className="bg-black w-screen">
      <div className="mt-0 md:-mt-80 pl-4 md:pl-12 relative z-20">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Trending Now"} movies={movies.trendingMovies} />
        <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
        <MovieList title={"Upcoming Movie"} movies={movies.nowPlayingMovies} />
        <MovieList title={"On The Air"} movies={movies.onTheAir} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
