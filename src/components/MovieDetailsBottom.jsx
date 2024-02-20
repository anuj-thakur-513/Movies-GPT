import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import CastCard from "./CastCard";

const MovieDetailsBottom = () => {
  const cast = useSelector((store) => store.movieDetails.cast);
  const recommendedMovies = useSelector(
    (store) => store.movies?.recommendedMovies,
  );

  return (
    <div>
      <h3 className="text-2xl font-semibold text-white">Top Billed Cast</h3>
      <div className="scrollbar-hide flex overflow-x-scroll scroll-smooth pt-2 no-scrollbar">
        {cast?.map((cast) => (
          <CastCard
            key={cast?.id}
            img_path={cast?.profile_path}
            name={cast?.name}
            character={cast?.character}
          />
        ))}
      </div>
      {recommendedMovies?.length !== 0 && (
        <div className="scrollbar-hide overflow-x-scroll scroll-smooth no-scrollbar">
          <MovieList title={"Recommended"} movies={recommendedMovies} />
        </div>
      )}
    </div>
  );
};

export default MovieDetailsBottom;
