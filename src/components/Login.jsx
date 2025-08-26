import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
// import userIcon from "../assets/netflix-red-icon.png";

const Login = () => {
  const navigate = useNavigate();
  const [isSignInForm, setSignInForm] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);

  const _name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    // Validate the form data
    console.log(email);
    console.log(password);
    const message = checkValidData(
      _name.current?.value ?? "",
      email.current.value ?? "",
      password.current.value ?? "",
      isSignInForm
    );
    setErrorMsg(message);

    if (message) return;

    // Proceed with Sign In/ Sign Up
    if (!isSignInForm) {
      // Sign Up logic:
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);

          updateProfile(user, {
            // To update the user profile with its name and photo url.
            displayName: _name.current.value,
            photoURL:
              "https://i.pinimg.com/736x/d7/19/6a/d7196adc7c4f353d52235c5e6ed12e65.jpg",
          })
            .then(() => {
              // Profile updated!
              // ...
            })
            .catch((error) => {
              // An error occurred
              // ...
              setErrorMsg(error);
            });

          navigate("/browse"); // Navigate to this route after storing user details in the store.
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + "- " + errorMessage);
          // ..
        });
    } else {
      // Sign In logic:
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse"); // Navigate to this route after storing user details in the store.
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + "- " + errorMessage);
        });
    }
  };

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
      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-black/80 absolute w-3/7 mx-auto left-0 right-0 my-20 text-white p-8"
      >
        <h1 className="m-2 text-3xl text-white font-bold py-2 bg-">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={_name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-2  text-white font-bold w-full rounded-md border border-white"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-2  text-white font-bold w-full rounded-md border border-white"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-2 text-white font-bold w-full rounded-md border border-white"
        />
        <p className="text-red-600">{errorMsg}</p>
        <button
          type="button"
          className="font-bold my-2 p-2 rounded-md text-white bg-red-600 w-full cursor-pointer"
          onClick={handleButtonClick}
        >
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
