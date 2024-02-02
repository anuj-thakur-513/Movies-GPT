import { useRef, useState } from "react";
import searchAi from "../utils/searchAi";

const SearchBar = () => {
  const [isSearching, setIsSearching] = useState(false);
  const searchText = useRef(null);

  const handleSearchClick = () => {
    searchAi(setIsSearching, searchText.current.value);
  };

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black bg-opacity-85 rounded-lg grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          className="p-4 m-4 col-span-9"
          type="text"
          ref={searchText}
          placeholder="What would you like to watch today ?"
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-600 text-white rounded-lg hover:bg-red-700 duration-150"
          onClick={handleSearchClick}
          disabled={isSearching}
        >
          {isSearching ? (
            <img
              src="/assets/loading.gif"
              alt="Searching"
              className="m-auto max-w-full h-6"
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
