import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
    console.log(isSignInForm);
  };
  return (
    <div>
      <Header />
      <div>
        <img
          className="absolute"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/3e4bd046-85a3-40e1-842d-fa11cec84349/web/CA-en-20250818-TRIFECTA-perspective_70fc89e5-1ac0-4f15-b08a-b8e9ba4eaa19_large.jpg"
          alt="logo"
        ></img>
      </div>
      <form className="bg-black/80 absolute w-3/7 mx-auto left-0 right-0 my-20 text-white p-8">
        <h1 className="m-2 text-3xl text-white font-bold py-2 bg-">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-2  text-white font-bold w-full rounded-md border border-white"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-2  text-white font-bold w-full rounded-md border border-white"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-2 text-white font-bold w-full rounded-md border border-white"
        />
        <button className="font-bold my-2 p-2 rounded-md text-white bg-red-600 w-full">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-3">
          {isSignInForm ? "New to CineSense? " : "Already a user? "}
          <span
            className="cursor-pointer cursor- font-bold hover:underline"
            onClick={toggleSignInForm}
          >
            {isSignInForm ? "Sign up now" : "Sign In now"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
