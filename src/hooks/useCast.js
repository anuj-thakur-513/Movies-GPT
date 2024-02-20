import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addCast } from "../store/movieDetails/movieDetailsSlice";
const useCast = (movieId) => {
  const dispatch = useDispatch();
  const getCast = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
      API_OPTIONS,
    );

    const json = await data.json();
    dispatch(addCast(json.cast));
  };

  useEffect(() => {
    getCast();
  }, [movieId]);
};

export default useCast;
