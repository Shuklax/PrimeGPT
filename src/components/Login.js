import Header from "./Header";
import { useState } from "react";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/af2fac72-d956-4952-8686-4d45d359d78c/web/IN-en-20250526-TRIFECTA-perspective_5db3e163-56f7-47c7-9a65-b79b9d76bf24_large.jpg"
          alt="background_image"
        />
      </div>
      <form className="p-12 w-3/12 bg-black text-white absolute bg-opacity-85 mx-auto left-0 right-0 my-36 rounded-lg">
        <h1 className="text-3xl font-bold py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>

        {isSignIn ? (
          ""
        ) : (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 rounded-md w-full"
          />
        )}

        <input
          type="text"
          placeholder="Email"
          className="p-4 my-4 rounded-md w-full"
        />

        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 rounded-md w-full"
        />
        <button className="p-4 my-4 bg-red-700 rounded-md w-full">
          Sign In
        </button>
        <p className="py-4">
          {isSignIn ? "New to Netflix?" : "Already have an account?"}{" "}
          <span
            className="text-gray-400 font-bold underline cursor-pointer"
            onClick={toggleSignIn}
          >
            {isSignIn ? "Signup now" : "Sign In"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
