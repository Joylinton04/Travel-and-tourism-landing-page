import React from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  return (
    <nav className="px-14 py-6 flex items-center justify-between max-w-[1440px] mx-auto ssm:px-7">
      <div className="inline-flex items-center gap-4 ssm:gap-2">
        <img src={assets.logo} />
        <h1 className="font-heading text-2xl text-white font-extrabold">
          Voyage
        </h1>
      </div>

      <ul className="flex items-center gap-6 text-[16px] font-medium text-white/90 relative mdd:hidden">
        {["Hotel", "Travel", "Destination", "Packages"].map((item, index) => (
          <li
            key={index}
            className="relative cursor-pointer transition-all duration-300 hover:bg-white hover:px-4 hover:py-1 hover:rounded-full hover:text-black"
          >
            {item}
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 hover:w-full" />
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-4">
        <button className="text-base font-bold bg-white text-black px-4 py-2 rounded-full  hover:bg-gray-200 transition-colors">
          Sign up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
