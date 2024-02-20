import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addRecommendedMovies } from "../store/movies/moviesSlice";
const useRecommendedMovies = (movieId) => {
  const dispatch = useDispatch();
  const getRecommendedMovies = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/recommendations?language=en-US&page=1`,
      API_OPTIONS,
    );

    const json = await data.json();
    dispatch(addRecommendedMovies(json.results));
  };

  useEffect(() => {
    getRecommendedMovies();
  }, [movieId]);
};

export default useRecommendedMovies;
