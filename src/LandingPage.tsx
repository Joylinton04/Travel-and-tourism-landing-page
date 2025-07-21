import React from "react";
import { assets } from "./assets/assets";
import Navbar from "./components/Navbar";

type Props = {
  children: React.ReactNode;
  pic: string;
};

const LandingPage = () => {
  return (
    <div className="h-full w-full relative font-body">
      <div
        style={{
          backgroundImage: `url(${assets.heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100%",
          width: "100%",
        }}
      >
        <Navbar />

        <div className="pt-32">
          <h1 className="font-heading font-bold text-[64px] text-center text-white/90">
            Discover Your Next Amazing Journey Full of Excitement and Wonder
          </h1>
          <p className="text-white/80 font-medium text-center">
            Embark on Your Next Incredible Adventure - Where Every Moment Spark
            Wonder, Discovery and Unforgettable Memories.
          </p>
        </div>

        <div className="px-14 py-16">
          <div className="h-[276px] bg-white w-full rounded-2xl p-4">
            <ul className="flex items-center gap-6 text-[#000000]/50 text-sm cursor-pointer relative">
              <li className="px-4 py-2 bg-black text-white rounded-full">
                Travel
              </li>
              {["Hotel", "Destination", "Packages"].map((item, index) => (
                <li
                  key={index}
                  className="rounded-full transition-all duration-300 hover:px-4 hover:py-2 hover:rounded-full hover:bg-black hover:text-white"
                >
                  {item}
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 hover:w-full" />
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-between">
              <div className="flex flex-col mt-4 gap-4">
                <h1 className="font-bold">Location</h1>
                <div className="relative flex items-center w-[377px] h-[48px] bg-gray-100 rounded-full border-gray-300">
                  <img src={assets.location} className="px-2" />
                  <input
                    type="text"
                    placeholder="Search for your next destination"
                    className="w-full h-full rounded-full px-4 py-2 outline-none transition-colors bg-transparent text-sm"
                  />
                </div>
              </div>
              <div className="flex flex-col mt-4 gap-4">
                <h1 className="font-bold">Departure</h1>
                <div className="relative flex items-center w-[377px] h-[48px] bg-gray-100 rounded-full border-gray-300">
                  <img src={assets.location} className="px-2" />
                  <input
                    type="text"
                    placeholder="Date range"
                    className="w-full h-full rounded-full px-4 py-2 outline-none transition-colors bg-transparent text-sm"
                  />
                </div>
              </div>
              <div className="flex flex-col mt-4 gap-4">
                <h1 className="font-bold">Guests</h1>
                <div className="relative flex items-center w-[377px] h-[48px] bg-gray-100 rounded-full border-gray-300">
                  <img src={assets.location} className="px-2" />
                  <input
                    type="text"
                    placeholder="Select Guest"
                    className="w-full h-full rounded-full px-4 py-2 outline-none transition-colors bg-transparent text-sm"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between mt-8">
              <div className="flex items-center gap-4">
                <h1 className="font-bold">Filters: </h1>
                <ul className="flex items-center gap-4 text-sm">
                  {
                    ["Maldives, South Asia", "Palawan, Thailand", "Ball, Indonesia","Santorini, Greece"].map((filter, index) => (
                      <li
                        key={index}
                        className="inline-block text-black rounded-full text-xs cursor-pointer transition-all duration-500 hover:bg-gray-300 border px-4 py-1"
                      >
                        {filter}
                      </li>
                    ))
                  }
                </ul>
              </div>
              <button className="px-4 py-2 bg-black text-white rounded-full text-sm">Search Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
