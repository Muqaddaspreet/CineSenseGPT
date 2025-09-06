import React from "react";
import logo from "../assets/CineSense-logo.png";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const _user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/"); // We navigate to the default route which is the login page.
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
        navigate("/error"); // We will later build a cool Error page
      });
  };
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
