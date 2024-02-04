import dayjs from "dayjs";
import { TMDB_IMAGE_URL } from "../utils/constants";
import RatingBar from "./RatingBar";

const MovieCard = ({ title, posterPath, rating, date }) => {
  if (!posterPath) return null;
  return (
    <div className="group hover:scale-110 hover:shadow-lg transition-transform duration-200">
      <div
        className={
          "w-[130px] md:w-[180px] m-2 cursor-pointer rounded-lg relative shadow-md"
        }
      >
        <img
          className="rounded-lg group-hover:opacity-50 transition-opacity"
          alt="movie card"
          src={TMDB_IMAGE_URL + posterPath}
        />
        <div className="relative left-1 bottom-4 md:left-2 md:bottom-8 w-8 md:w-14 bg-gray-900 rounded-full ">
          <RatingBar rating={rating} />
        </div>
        <h3
          className={
            "text-cyan-50 font-semibold bottom-4 px-2 relative md:bottom-7 md:left-2 text-sm md:text-base line-clamp-2"
          }
        >
          {title}
        </h3>
        <p
          className={
            "text-cyan-50 bottom-4 px-2 text-xs md:text-base relative md:bottom-7 md:left-2"
          }
        >
          {dayjs(date).format("MMM D, YYYY")}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
