import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import MovieDetailsShimmer from "../components/MovieDetailsShimmer";
import useMovieDetails from "../hooks/useMovieDetails";
import MovieDetailsTop from "../components/MovieDetailsTop";
import MovieDetailsBottom from "../components/MovieDetailsBottom";
import useMovieTrailer from "../hooks/useMovieTrailer";
import useCast from "../hooks/useCast";
import useRecommendedMovies from "../hooks/useRecommendedMovies";

const MovieDetails = () => {
  const movieId = useParams().movieId;
  useMovieTrailer(movieId);
  useMovieDetails(movieId);
  useRecommendedMovies(movieId);
  useCast(movieId);
  const movieDetails = useSelector((store) => store.movieDetails.movieDetails);

  return movieDetails === null || movieDetails?.id != movieId ? (
    <MovieDetailsShimmer />
  ) : (
    <>
      <MovieDetailsTop />
      <div className="bg-black">
        <MovieDetailsBottom />
      </div>
    </>
  );
};

export default MovieDetails;
