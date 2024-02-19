import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addMovieDetails } from "../store/movieDetails/movieDetailsSlice";

const useMovieDetails = (movieId) => {
  const dispatch = useDispatch();

  const getMovieDetails = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId,
      API_OPTIONS,
    );

    const json = await data.json();
    dispatch(addMovieDetails(json));
  };

  useEffect(() => {
    getMovieDetails();
  }, [movieId]);
};

export default useMovieDetails;
