import Header from "./Header";
import { useRef, useState } from "react";
import { checkValidData, checkName } from "../utils/validation";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isNameValid, setIsNameValid] = useState(false);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    console.log(email.current.value);
    console.log(password.current.value);

    const validateName = checkName(name.current.value);
    setIsNameValid(validateName);

    //validate the form data
    const message = checkValidData(email.current.value, password.current.value);
    setIsError(message);
  };

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
      <form onSubmit={(e)=> e.preventDefault()} className="p-12 w-3/12 bg-black text-white absolute bg-opacity-85 mx-auto left-0 right-0 my-36 rounded-lg">
        <h1 className="text-3xl font-bold py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>

        {isSignIn ? (
          ""
        ) : (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 rounded-md w-full bg-gray-700"
          />
        )}
        
        {isNameValid ? <p className="text-red-500">{isNameValid}</p> : null}

        <input
          ref={email}
          type="text"
          placeholder="Email"
          className="p-4 my-4 rounded-md w-full bg-gray-700"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 rounded-md w-full bg-gray-700"
        />

        {isError? <p className="text-red-500">{isError}</p> : null}

        <button
          onClick={handleButtonClick}
          className="p-4 my-4 bg-red-700 rounded-md w-full"
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4">
          {isSignIn ? "New to Netflix" : "Already have an account?"}{" "}
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
