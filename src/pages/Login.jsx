import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { validateData } from "../utils/validate";
import { useDispatch } from "react-redux";
import signup from "../utils/signup";
import signin from "../utils/signin";

const Login = () => {
  const dispatch = useDispatch();

  const [isSignIn, setIsSignIn] = useState(false); // state for toggling signup/signin
  const [errorMessage, setErrorMessage] = useState(null); // state to show errors faced while auth
  const [authenticating, setAuthenticating] = useState(false); // state to show loading state while authenticating

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const toggleSignIn = () => {
    setIsSignIn((isSignIn) => !isSignIn);
    // Reset all the fields and error message
    email.current.value = "";
    password.current.value = "";
    setErrorMessage(null);
  };

  const handleAuthClick = () => {
    // validate email & password
    let message = null;
    if (isSignIn) {
      message = validateData(email.current.value, password.current.value);
    } else {
      message = validateData(
        email.current.value,
        password.current.value,
        name.current.value,
      );
    }
    setErrorMessage(message);
    if (message) {
      return;
    }

    // Authentication
    setAuthenticating(true);
    if (!isSignIn) {
      signup(
        name.current.value,
        email.current.value,
        password.current.value,
        setErrorMessage,
        setAuthenticating,
        dispatch,
      );
    } else {
      signin(
        email.current.value,
        password.current.value,
        setErrorMessage,
        setAuthenticating,
      );
    }
  };

  return (
    <div className="relative">
      <img
        src="/assets/backgroundImage.jpg"
        alt="background"
        className="h-screen w-screen object-cover brightness-75"
      />
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute left-1/2 top-1/2 w-11/12 -translate-x-1/2 -translate-y-1/2 transform rounded-lg bg-black bg-opacity-85 p-6 text-white md:w-3/4 md:p-12 lg:w-1/2 xl:w-1/3"
      >
        <h1 className="pb-4 text-3xl font-bold">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            ref={name}
            placeholder="Full Name"
            className="my-4 w-full bg-gray-800 bg-opacity-85 p-4"
          />
        )}
        <input
          type="text"
          ref={email}
          placeholder="Email Address"
          className="my-3 w-full rounded bg-gray-800 bg-opacity-85 p-4"
        />
        <input
          type="password"
          ref={password}
          placeholder="Password"
          className="my-3 w-full rounded bg-gray-800 bg-opacity-85 p-4"
        />
        {errorMessage && (
          <p className="rounded bg-[#E87C03] p-3">{errorMessage}</p>
        )}
        <button
          className="relative my-6 h-14 w-full rounded bg-red-600 p-4 duration-150 hover:bg-red-700"
          onClick={handleAuthClick}
          disabled={authenticating}
        >
          {authenticating && (
            <img
              src="/assets/loading.gif"
              alt="Loading"
              className="m-auto h-6 max-w-full"
            />
          )}
          {authenticating ? "" : isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <div className="flex py-4">
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
