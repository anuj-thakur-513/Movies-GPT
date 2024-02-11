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
          "relative m-2 w-[130px] cursor-pointer shadow-md duration-200 group-hover:scale-110 md:w-[180px]"
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
        <div className="relative bottom-4 left-1 w-8 rounded-full bg-gray-900 md:bottom-8 md:left-2 md:w-14 ">
          <RatingBar rating={rating} />
        </div>
        <h3
          className={
            "relative bottom-4 line-clamp-1 px-2 text-sm font-semibold text-cyan-50 md:bottom-7 md:left-2 md:text-base"
          }
        >
          {title}
        </h3>
        <p
          className={
            "relative bottom-4 px-2 text-xs text-cyan-50 md:bottom-7 md:left-2 md:text-base"
          }
        >
          {dayjs(date).format("MMM D, YYYY")}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
