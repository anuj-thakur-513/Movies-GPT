import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import searchAi from "../utils/searchAi";
import searchMovie from "../utils/searchMovie";
import {
  addGptSearchResults,
  addTmdbSearchResults,
} from "../store/search/searchSlice";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [isSearching, setIsSearching] = useState(false);
  const searchText = useRef(null);

  const handleSearchClick = async () => {
    setIsSearching(true);
    let moviesList = await searchAi(searchText.current.value);
    if (moviesList) {
      moviesList.unshift(searchText.current.value);
      moviesList = Array.from(new Set(moviesList));
      const arr = moviesList.map((movie) => searchMovie(movie)); // we get an array of promises as the map function doesn't wait for promise to resolve
      const tmdbResults = await Promise.all(arr);
      console.log(tmdbResults);
      dispatch(addGptSearchResults(moviesList));
      dispatch(addTmdbSearchResults(tmdbResults));
    }

    setIsSearching(false);
  };

  return (
    <div className="flex justify-center pt-[35%] md:pt-[10%]">
      <form
        className="grid w-full grid-cols-12 rounded-lg bg-black bg-opacity-85 md:w-1/2"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          className="col-span-9 m-4 p-4 text-xs lg:text-base"
          type="text"
          ref={searchText}
          placeholder="What kind of movies would you like to watch ?"
        />
        <button
          className="col-span-3 m-4 rounded-lg bg-red-600 text-white duration-150 hover:bg-red-700 md:px-4 md:py-2"
          onClick={handleSearchClick}
          disabled={isSearching}
        >
          {isSearching ? (
            <img
              src="/assets/loading.gif"
              alt="Searching"
              className="m-auto h-6 max-w-full"
            />
          ) : (
            "Search"
          )}
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
