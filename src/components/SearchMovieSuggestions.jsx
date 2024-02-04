import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SearchMovieSuggestions = () => {
  const search = useSelector((store) => store.search);
  const { gptSearchResults, tmdbSearchResults } = search;

  if (!gptSearchResults) return null;

  return (
    <div className="p-4 m-2 bg-black text-white bg-opacity-85">
      <div>
        {gptSearchResults?.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={tmdbSearchResults[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchMovieSuggestions;
