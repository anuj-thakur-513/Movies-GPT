import { useSelector, useDispatch } from "react-redux";
import { TMDB_IMAGE_URL } from "../utils/constants";
import VideoPalyer from "./VideoPlayer";
import PlayCircleOutlineOutlinedIcon from "@mui/icons-material/PlayCircleOutlineOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BookmarkAddOutlinedIcon from "@mui/icons-material/BookmarkAddOutlined";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import RatingBar from "./RatingBar";
import Genre from "./Genre";
import dayjs from "dayjs";
import { useState } from "react";
import { handleFavourite } from "../utils/handleFavourite";
import { handleWatchlist } from "../utils/handleWatchlist";

const MovieDetailsTop = () => {
  const dispatch = useDispatch();
  const movieDetails = useSelector((store) => store.movieDetails.movieDetails);

  const hours = Math.floor(movieDetails?.runtime / 60);
  const minutes = Math.floor(movieDetails?.runtime % 60);
  const date = movieDetails?.release_date;
  const trailer = useSelector((store) => store.movies.trailerVideo);
  const keys = trailer?.key;

  const [toggle, setToggle] = useState(false);
  const [favourite, setFavourite] = useState(false);
  const [watchlist, setWatchlist] = useState(false);

  const handlePlay = () => {
    setToggle((toggle) => !toggle);
  };

  const handlePause = () => {
    setToggle(false);
  };

  return (
    <div>
      <div className="relative">
        <img
          className="absolute -z-10 h-[250px] object-cover md:h-screen md:w-full"
          alt="backdropImg"
          src={TMDB_IMAGE_URL + movieDetails?.backdrop_path}
        />
        <div className="absolute -z-10 h-[250px] w-full bg-black bg-opacity-60 md:h-screen md:w-full md:bg-opacity-80"></div>
        <div className="flex flex-col md:flex md:h-full md:w-full md:flex-row ">
          <div className="relative left-10 top-16 flex w-28 md:left-0 md:top-0 md:w-4/12 md:p-20 md:pt-[130px]">
            <img
              className="mx-auto rounded-lg"
              alt="moviePoster"
              src={TMDB_IMAGE_URL + movieDetails?.poster_path}
            />
          </div>
          <div className="relative top-20 flex min-h-[500px] w-full flex-col items-center bg-[#0a0908] pt-5 text-center text-white md:top-0 md:w-8/12 md:items-start md:bg-transparent md:pt-[140px] md:text-left">
            <h1 className="my-2 px-4 text-5xl font-semibold md:px-0 ">
              {movieDetails?.title}
            </h1>
            <p className="text-lg font-light">{movieDetails?.tagline}</p>
            <div className=" flex py-2">
              <h3>{dayjs(date).format("MMM D, YYYY") + "      •"}</h3>
              <h3 className="mx-2">{hours + "h " + minutes + "m"}</h3>
            </div>
            <h3 className="flex">
              {movieDetails?.genres.map((genre) => (
                <Genre key={genre?.name} genre={genre?.name} />
              ))}
            </h3>
            <div className="flex py-2 md:my-3">
              <div className="mx-1 w-11 px-1 py-2 md:mr-2 md:w-12 md:px-0 md:py-3">
                <RatingBar rating={movieDetails?.vote_average.toFixed(1)} />
              </div>
              <button
                onClick={() =>
                  handleFavourite(
                    dispatch,
                    favourite,
                    setFavourite,
                    movieDetails,
                  )
                }
                className="mx-1 px-2 py-2 transition duration-200 after:text-red-600 hover:scale-110 md:mx-4"
              >
                {!favourite ? (
                  <FavoriteBorderIcon fontSize="large" />
                ) : (
                  <FavoriteIcon fontSize="large" />
                )}
              </button>
              <button
                onClick={() =>
                  handleWatchlist(
                    dispatch,
                    watchlist,
                    setWatchlist,
                    movieDetails,
                  )
                }
                className="mx-1 px-2 py-2 transition duration-200 after:text-red-600 hover:scale-110 md:mx-4"
              >
                {!watchlist ? (
                  <BookmarkAddOutlinedIcon fontSize="large" />
                ) : (
                  <BookmarkIcon fontSize="large" />
                )}
              </button>
              <button
                onClick={() => {
                  handlePlay();
                }}
                className="nd:px-2 mx-1 rounded-lg px-2 py-2 text-xl text-white transition duration-200 hover:scale-110"
              >
                <PlayCircleOutlineOutlinedIcon fontSize="large" /> Play
              </button>
            </div>
            <div className="px-4 py-2 pb-5 md:px-0">
              <h3 className="my-2 text-2xl font-medium">Overview</h3>
              <p className="md:w-3/4">{movieDetails?.overview}</p>
            </div>
          </div>
          {toggle && (
            <>
              <div className="absolute flex h-screen w-full items-center">
                <div className="absolute left-[50%] top-[45%] z-30 aspect-video w-full -translate-x-1/2 -translate-y-1/2 px-2 md:top-[50%] md:w-[50%]">
                  <VideoPalyer keys={keys} />
                </div>
                <div
                  onClick={handlePause}
                  className="absolute z-20 flex h-screen w-full bg-black bg-opacity-95 text-white"
                >
                  <h2 className="pl-8 pt-8 text-xl font-medium">
                    Movie Trailer
                  </h2>
                  <button className="absolute right-0 p-8 transition hover:-translate-y-1">
                    <CancelOutlinedIcon fontSize="large" />
                  </button>
                </div>
              </div>{" "}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default MovieDetailsTop;
