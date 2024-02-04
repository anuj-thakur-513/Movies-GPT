import dayjs from "dayjs";
import { Image, Breathing } from "react-shimmer";
import { TMDB_IMAGE_URL } from "../utils/constants";
import RatingBar from "./RatingBar";

const MovieCard = ({ title, posterPath, rating, date }) => {
  if (!posterPath) return null;
  return (
    <div className="group">
      <div
        className={
          "w-[130px] md:w-[180px] m-2 cursor-pointer relative shadow-md group-hover:scale-110 duration-200"
        }
      >
        <Image
          NativeImgProps={{
            className:
              "rounded-lg transition-all group-hover:brightness-75 duration-200",
          }}
          alt="movie card"
          src={TMDB_IMAGE_URL + posterPath}
          fallback={<Breathing width={130} height={180} />}
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
