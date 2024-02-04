import { useSelector } from "react-redux";
import logout from "../utils/logout";
import { Link } from "react-router-dom";

const Header = () => {
  const user = useSelector((store) => store.user);
  const isSearchPage = window.location.pathname === "/search";
  const targetPath = isSearchPage ? "/browse" : "/search";

  const handleSignoutClick = () => {
    logout();
  };

  return (
    <div className="absolute flex justify-between items-center w-screen px-6 bg-gradient-to-b from-black z-10">
      <Link to={user === null ? "/" : "/browse"}>
        <img className="w-44" src="/assets/logo.png" alt="logo" />
      </Link>
      {user && (
        <div className="flex items-center">
          <Link to={targetPath}>
            <button className="py-2 px-4 m-2 mx-4 bg-purple-600 text-white rounded">
              {isSearchPage ? "Home" : "Search"}
            </button>
          </Link>
          <img
            className="w-12 rounded"
            src="/assets/userProfileIcon.jpg"
            alt="profile icon"
          />
          <button
            className="ml-4 rounded bg-[#FF000C] text-white p-2 scale-100 hover:scale-95 duration-200"
            onClick={handleSignoutClick}
          >
            Signout
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
