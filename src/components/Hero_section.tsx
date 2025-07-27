import React from "react";
import { assets } from "../assets/assets";

const Hero_section = () => {
  return (
    <div className="px-6 ssm:px-4 py-10 max-w-[1440px] mx-auto">
      <div className="h-auto bg-white w-full rounded-2xl p-4 space-y-6">
        {/* Nav Links */}
        <ul className="flex flex-wrap items-center gap-4 text-[#000000]/50 text-sm cursor-pointer relative">
          <li className="px-4 py-2 bg-black text-white rounded-full">Travel</li>
          {["Hotel", "Destination", "Packages"].map((item, index) => (
            <li
              key={index}
              className="rounded-full transition-all duration-300 hover:px-4 hover:py-2 hover:rounded-full hover:bg-black hover:text-white relative"
            >
              {item}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 hover:w-full" />
            </li>
          ))}
        </ul>

        {/* Form Section */}
        <div className="flex flex-wrap lgg:flex-col lgg:gap-6 items-start justify-between gap-8">
          {/* Location */}
          <div className="flex flex-col gap-2 w-[377px] ssm:w-full">
            <h1 className="font-bold text-sm">Location</h1>
            <div className="relative flex items-center h-[48px] bg-gray-100 rounded-full border border-gray-300">
              <img src={assets.location} className="px-4" />
              <input
                type="text"
                placeholder="Search for your next destination"
                className="w-full h-full rounded-full px-4 py-2 outline-none transition-colors bg-transparent text-sm"
              />
            </div>
          </div>

          {/* Departure */}
          <div className="flex flex-col gap-2 w-[377px] ssm:w-full">
            <h1 className="font-bold text-sm">Departure</h1>
            <div className="relative flex items-center h-[48px] bg-gray-100 rounded-full border border-gray-300">
              <img src={assets.location} className="px-4" />
              <input
                type="text"
                placeholder="Date range"
                className="w-full h-full rounded-full px-4 py-2 outline-none transition-colors bg-transparent text-sm"
              />
            </div>
          </div>

          {/* Guests */}
          <div className="flex flex-col gap-2 w-[377px] ssm:w-full">
            <h1 className="font-bold text-sm">Guests</h1>
            <div className="relative flex items-center h-[48px] bg-gray-100 rounded-full border border-gray-300">
              <img src={assets.guest} className="px-4" />
              <input
                type="text"
                placeholder="Select Guest"
                className="w-full h-full rounded-full px-4 py-2 outline-none transition-colors bg-transparent text-sm"
              />
            </div>
          </div>
        </div>

        {/* Filters & Button */}
        <div className="flex ssm:flex-col gap-4 items-center justify-between mt-6 mdd:flex-col mdd:items-start">
          <div className="flex flex-wrap gap-4 items-center">
            <h1 className="font-bold text-sm">Filters:</h1>
            <ul className="flex flex-wrap gap-2 text-sm">
              {[
                "Maldives, South Asia",
                "Palawan, Thailand",
                "Ball, Indonesia",
                "Santorini, Greece",
              ].map((filter, index) => (
                <li
                  key={index}
                  className="inline-block text-black rounded-full text-xs cursor-pointer transition-all duration-300 hover:bg-gray-300 border px-4 py-1"
                >
                  {filter}
                </li>
              ))}
            </ul>
          </div>
          <button className="px-6 py-2 bg-black text-white rounded-full text-sm whitespace-nowrap">
            Search Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero_section;
