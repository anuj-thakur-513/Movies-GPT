import { useRef, useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import { validateData } from "../utils/validate";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
    // Reset all the fields and error message
    email.current.value = "";
    password.current.value = "";
    setErrorMessage(null);
  };

  const handleAuthClick = () => {
    // validate email & password
    const message = validateData(email.current.value, password.current.value);
    setErrorMessage(message);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="/assets/backgroundImage.jpg"
          alt="background"
          className="w-screen h-screen brightness-75"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-3/12 p-12 bg-black bg-opacity-85 my-40 mx-auto left-0 right-0 text-white rounded-lg"
      >
        <h1 className="font-bold text-3xl pb-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-800 bg-opacity-85"
          />
        )}
        <input
          type="text"
          ref={email}
          placeholder="Email Address"
          className="p-4 my-3 w-full rounded bg-gray-800 bg-opacity-85"
        />
        <input
          type="password"
          ref={password}
          placeholder="Password"
          className="p-4 my-3 w-full rounded bg-gray-800 bg-opacity-85"
        />
        {errorMessage && (
          <p className="bg-[#E87C03] p-3 rounded">{errorMessage}</p>
        )}
        <button
          className="p-4 my-6 w-full bg-red-600 rounded hover:bg-red-700 duration-150"
          onClick={handleAuthClick}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <div className="py-4 flex">
          <p className="text-gray-400">
            {isSignIn ? "New to Movies GPT?" : "Already a User?"}
          </p>
          <Link
            className="pl-2 hover:underline"
            to={"/#"}
            onClick={toggleSignIn}
          >
            {isSignIn ? "Sign up now" : "Sign in"}
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
