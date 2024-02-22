import MovieCard from "../components/MovieCard";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CancelTwoToneIcon from "@mui/icons-material/CancelTwoTone";
import { removeWatchlistMovie } from "../store/movies/moviesSlice";

const Watchlist = () => {
  const watchlist = useSelector((store) => store.movies.watchList);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="min-h-screen w-full bg-black px-5 pt-16 text-white md:px-10 md:pb-5 md:pt-[120px]">
        <h2 className="text-3xl font-bold ">Watchlist</h2>
        {watchlist.length === 0 && (
          <div className="relative left-1/2 top-60 w-[200px] translate-x-[-50%] translate-y-[-50%] pt-32 md:top-48 md:w-[300px] md:py-20 md:pt-44">
            <p className="text-center text-2xl font-bold text-[#FF000C]">
              Add some Movies to your Watchlist
            </p>
          </div>
        )}
        <div className="mx-auto grid grid-cols-2 pl-2 md:grid-cols-6">
          {watchlist?.map((movie) => (
            <div key={movie.id} className="relative">
              <button
                onClick={() => {
                  dispatch(removeWatchlistMovie(movie?.id));
                }}
                className="absolute top-0 z-10 text-gray-500 transition hover:-translate-y-1 hover:text-red-600"
              >
                <CancelTwoToneIcon />
              </button>
              <Link key={movie?.id} to={"/movie/" + movie?.id}>
                <MovieCard
                  title={movie.title}
                  posterPath={movie?.poster_path}
                  rating={movie?.vote_average.toFixed(1)}
                  date={movie?.release_date}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Watchlist;
