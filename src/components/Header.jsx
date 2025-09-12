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

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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

      return () => {
        unsubscribe();
      };
    });
  }, []);
  // Here, we used this event Bismarck function to cheque the authorization. So if the user is logged in, The store will be set up and user redirected to the browse page.
  // If the user is logged out, it removes the user from the store.
  // But this is the place where we should navigate, i.e. when the user is logged in and gets into the store.

  return (
    <div className="z-30 absolute flex justify-between bg-gradient-to-b from-black w-full">
      <img className="w-40 m-6" src={logo} alt="logo" />

      {_user && (
        <div className="flex m-2 ">
          <img
            className="w-10 h-10 p-1 mx-2 rounded-lg my-4"
            alt="userIcon"
            src={_user?.photoURL}
          />
          <button
            onClick={handleSignOut}
            className="rounded-md px-2 my-5 font-bold bg-red-600 text-white cursor-pointer"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
