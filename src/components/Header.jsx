import React from "react";
import logo from "../assets/CineSense-logo.png";

const Header = () => {
  return (
    <div className="z-30 absolute bg-gradient-to-b from-black w-full">
      <img className="w-40 m-6" src={logo} alt="logo"></img>
    </div>
  );
};

export default Header;
