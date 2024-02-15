import SearchBar from "../components/SearchBar";
import SearchMovieSuggestions from "../components/SearchMovieSuggestions";

const Search = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img
          className="h-screen w-screen object-cover brightness-75"
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
