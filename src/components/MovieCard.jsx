import { TMDB_IMAGE_URL } from "../utils/constants";

const MovieCard = ({ title, posterPath }) => {
  return (
    <div className="w-48 pr-4 cursor-pointer">
      <img
        src={TMDB_IMAGE_URL + posterPath}
        alt={title}
        className="rounded-xl"
      />
    </div>
  );
};

export default MovieCard;
