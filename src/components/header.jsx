import React from "react";
import Images from "../assets/images";

const Header = () => {
  return (
    <div className="flex items-center  gap-5 p-4 bg-Back_White">
      {/* Header Section */}
      <img
        src={Images.Logo}
        alt="Logo"
        className="w-12  md:max-w-[50px] transform-gpu hover:scale-105 transition-transform duration-300 ease-in-out"
      />
      <h1 className="text-md sm:text-lg md:text-xl font-bold text-Text_DarkGray hover:text-Text_Blue transition-colors duration-300 ease-in-out">
        World DataResource
      </h1>
    </div>
  );
};

export default Header;
