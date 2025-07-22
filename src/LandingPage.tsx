import React from "react";
import { assets } from "./assets/assets";
import Navbar from "./components/Navbar";
import Hero_section from "./components/Hero_section";
import Sponsors from "./components/Sponsors";

type Props = {
  children: React.ReactNode;
  pic: string;
};

const LandingPage = () => {
  return (
    <div className="w-full relative font-body">
      <div
        className="h-screen"
        style={{
          backgroundImage: `url(${assets.heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100%",
          width: "100%",
        }}
      >
        <Navbar />

        <div className="pt-28 max-w-[1440px] mx-auto">
          <h1 className="font-heading font-bold text-[64px] text-center text-white/90 leading-tight">
            Discover Your Next Amazing Journey Full of Excitement and Wonder
          </h1>
          <p className="text-white/80 font-medium text-center">
            Embark on Your Next Incredible Adventure - Where Every Moment Spark
            Wonder, Discovery and Unforgettable Memories.
          </p>
        </div>

        {/* Hero section */}
        <Hero_section />
      </div>
      <h1 className="font-semibold text-2xl p-6 text-center">
        Trusted by 500+ Companies
      </h1>
      <div className="px-14 flex justify-between items-center">
        <Sponsors img={assets.segment} text="Segment"/>
        <Sponsors img={assets.goodwell} text="Goodwell"/>
        <Sponsors img={assets.goodwell} text="Goodwell"/>
        <Sponsors img={assets.screentime} text="Screentime"/>
        <Sponsors img={assets.mastermail} text="Mastermail"/>
        <Sponsors img={assets.segment} text="Shutterframe"/>
      </div>
      <div>
        <h1 className="w-[523px] font-heading mx-auto mt-20 text-4xl font-extrabold text-center">Top Travel Deals of the Month  Handpicked for you</h1>
        <h1 className="w-[523px] mx-auto mt-6 font-medium text-center">Explore curated travel packages for every kind of traveler - whether you’re dreaming of a beach escape, a mountain adventure, or a vibrant city journey, there’s something special waiting for you</h1>
      </div>
    </div>
  );
};

export default LandingPage;
