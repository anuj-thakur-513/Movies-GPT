import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6">
      <h1 className="py-4 text-lg text-white md:text-3xl">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex">
          {movies?.map((movie) => (
            <Link key={movie?.id} to={"/movie/" + movie?.id}>
              <MovieCard
                title={movie?.title}
                posterPath={movie?.poster_path}
                rating={movie?.vote_average.toFixed(1)}
                date={movie?.release_date}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
