import SearchBar from "../components/SearchBar";
import SearchMovieSuggestions from "../components/SearchMovieSuggestions";

const Search = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img
          className="w-screen h-screen"
          src="/assets/backgroundImage.jpg"
          alt="Netflix bg"
        />
      </div>
      <SearchBar />
      <SearchMovieSuggestions />
    </div>
  );
};

export default Search;
