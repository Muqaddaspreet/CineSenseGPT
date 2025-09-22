import React from "react";
import logo from "../assets/CineSense-logo.png";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const _user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        // navigate("/"); // We navigate to the default route which is the login page.
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
        navigate("/error"); // We will later build a cool Error page
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        // ...
        navigate("/browse");
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }

      // Unsubscribe from component unmounts
      return () => {
        unsubscribe();
      };
    });
  }, []);
  // Here, we used this event Bismarck function to check the authorization. So if the user isFor toggling the button inside The header logged in, The store will be set up and user redirected to the browse page.
  // If the user is logged out, it removes the user from the store.
  // But this is the place where we should navigate, i.e. when the user is logged in and gets into the store.

  const handleGptSearchClick = () => {
    // Toggle GPT Search
    dispatch(toggleGptSearchView()); // We dispatch an action to the store.
  };

  const handleLanguageChange = (e) => {
    console.log(e.target.value);
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="z-30 absolute flex flex-col justify-center md:justify-between bg-gradient-to-b md:flex-row from-black w-full ">
      <img className="w-40 mt-6 mx-auto md:m-6" src={logo} alt="logo" />

      {_user && (
        <div className="flex m-2 justify-center">
          {showGptSearch && ( // Only show when showGptSearch value is true.
            <select
              className="p-1 md:py-2 font-bold w-22 h-7 md:h-10 bg-gray-900 text-white my-0 md:my-4 z-80 rounded-lg text-sm md:text-lg"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => {
                return (
                  <option
                    className="z-100"
                    key={lang.identifier}
                    value={lang.identifier}
                  >
                    {lang.name}
                  </option>
                );
              })}
            </select>
          )}
          <button
            className="h-7 md:h-10 px-2 ml-2 my-0 md:my-4 bg-purple-800 text-white rounded-lg hover:bg-purple-800/85 cursor-pointer text-sm md:text-lg font-bold"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "🏠Home" : "🔍GPT Search"}
          </button>
          <img
            className="w-7 md:w-10 h-7 md:h-10 mx-2 rounded-lg my-0 md:my-4"
            alt="userIcon"
            src={_user?.photoURL}
          />
          <button
            onClick={handleSignOut}
            className="rounded-md px-2 my-0 md:my-4 font-bold bg-red-600 text-white text-sm md:text-lg cursor-pointer hover:bg-red-600/85"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
