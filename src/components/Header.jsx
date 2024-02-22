import { useSelector } from "react-redux";
import logout from "../utils/logout";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import { useState, useEffect, useRef } from "react";

const Header = () => {
  const user = useSelector((store) => store.user);
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const isSearchPage = window.location.pathname === "/search";
  const targetPath = isSearchPage ? "/browse" : "/search";

  const handleSignoutClick = () => {
    logout();
  };

  const handleUserClick = () => {
    setDropDownOpen((dropDownOpen) => !dropDownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropDownOpen(false);
    }
  };

  // close dropdown on clicking anywhere in the window
  useEffect(() => {
    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // reset state of dropdown when user auth changed in redux store
  useEffect(() => {
    setDropDownOpen(false);
  }, [user]);

  return (
    <div className="absolute z-10 flex w-screen items-center justify-between bg-gradient-to-b from-black px-4 md:px-6">
      <Link to={user === null ? "/" : "/browse"}>
        <img className="w-28 md:w-44" src="/assets/logo.png" alt="logo" />
      </Link>
      {user && (
        <div className="flex items-center">
          <Link
            to={targetPath}
            className="mr-1 duration-150 hover:scale-125 md:mr-5"
          >
            <button className="m-2 mx-2 rounded-lg px-1 text-white md:mx-4">
              {isSearchPage ? (
                <HomeIcon fontSize="large" />
              ) : (
                <SearchIcon fontSize="large" />
              )}
            </button>
          </Link>
          <div className="relative inline-block" ref={dropdownRef}>
            <img
              className="w-10 cursor-pointer md:mx-2 md:w-12"
              src="/assets/userProfileIcon.jpg"
              alt="profile icon"
              onClick={handleUserClick}
            />
            {dropDownOpen && (
              <div className="absolute right-0 mt-2 w-48 rounded-md bg-gray-800 shadow-lg">
                <div className="py-1">
                  <p className="block px-4 py-2 text-white">
                    You are signed in as{" "}
                    <strong className="text-[#FF000C]">
                      {user?.displayName}
                    </strong>
                  </p>
                  <Link to="/watchlist">
                    <button className="block w-full px-4 py-2 text-left text-white duration-100 hover:bg-black">
                      Watch Later
                    </button>
                  </Link>
                  <Link to="/favourites">
                    <button className="block w-full px-4 py-2 text-left text-white duration-100 hover:bg-black">
                      Favourites
                    </button>
                  </Link>
                  <button
                    onClick={handleSignoutClick}
                    className="block w-full px-4 py-2 text-left text-white duration-100 hover:bg-black"
                  >
                    Logout <LogoutIcon />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
