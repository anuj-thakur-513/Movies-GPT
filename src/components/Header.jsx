import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignoutClick = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="absolute flex justify-between items-center w-screen px-6 bg-gradient-to-b from-black z-10">
      <img className="w-44" src="/assets/logo.png" alt="logo" />
      {user && (
        <div className="flex items-center">
          <img
            className="w-12"
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
