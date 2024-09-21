import React, { useState } from "react";
import WorldMap from "react-world-map";
import Images from "../assets/images"; // Ensure this correctly imports the image paths

const Landing = () => {
  const [selected, onSelect] = useState(null);

  return (
    <div
      className="text-center w-full flex flex-col sm:flex-row  items-center justify-center h-[500px] bg-cover bg-center bg-fixed bg-black"
      style={{ backgroundImage: `url(${Images.Bg2})` }}
    >
      <p className=" sm:hidden block text-xl md:text-xl font-light mb-4 text-Back_White mx-4 ">
        Welcome to World DataResource! Explore global data resources with ease.
      </p>
      <p className=" hidden sm:block text-xl md:text-2xl font-light mb-4 text-Back_White self-end ">
        Welcome to World DataResource!
      </p>
      <img
        src={Images.map}
        alt="Map"
        className="w-[400px] lg:w-[600px] hover:scale-110 transition-transform duration-300 ease-in-out"
      />
      <p className="hidden sm:block text-xl md:text-2xl font-light mb-4 text-Back_White self-end">
        Explore global data resources with ease.
      </p>
    </div>
  );
};

export default Landing;
