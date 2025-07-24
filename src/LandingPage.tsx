import React from "react";
import { assets } from "./assets/assets";
import Navbar from "./components/Navbar";
import Hero_section from "./components/Hero_section";
import Sponsors from "./components/Sponsors";

type Props = {
  children: React.ReactNode;
  pic: string;
};

const card_gallery = [
  {
    img: assets.card_gallery2,
    title: "Maldives, South Asia",
    amount: "$650 - $950",
    description:
      "A comprehensive 10-day travel guide designed to the gems and attractions of the Maldives.",
    className: "col-start-2",
  },
  {
    img: assets.card_gallery3,
    title: "Pai, Thailand",
    amount: "$650 - $950",
    description:
      "A comprehensive 10-day travel guide designed to the gems and attractions of Pai.",
    className: "col-start-3",
  },
  {
    img: assets.card_gallery5,
    title: "Palawan, Philippines",
    amount: "$650 - $950",
    description:
      "A comprehensive 10-day travel guide designed to the gems and attractions of Palawan.",
    className: "col-start-2",
  },
  {
    img: assets.card_gallery4,
    title: "Santorini, Greece",
    amount: "$650 - $950",
    description:
      "A comprehensive 10-day travel guide designed to the gems and attractions of Santorini.",
    className: "col-start-3",
  },
];
const card_gallery2 = [
  {
    img: assets.card_gallery1,
    title: "Maldives, South Asia",
    amount: "$650 - $950",
    description:
      "A comprehensive 10-day travel guide designed to the gems and attractions of the Maldives.",
    className: "col-start-2",
  },
  {
    img: assets.bamurru,
    title: "Pai, Thailand",
    amount: "$650 - $950",
    description:
      "A comprehensive 10-day travel guide designed to the gems and attractions of Pai.",
    className: "col-start-3",
  },
  {
    img: assets.oda,
    title: "Palawan, Philippines",
    amount: "$650 - $950",
    description:
      "A comprehensive 10-day travel guide designed to the gems and attractions of Palawan.",
    className: "col-start-2",
  },
  {
    img: assets.jimbaran,
    title: "Santorini, Greece",
    amount: "$650 - $950",
    description:
      "A comprehensive 10-day travel guide designed to the gems and attractions of Santorini.",
    className: "col-start-3",
  },
];

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
      <div className="px-14 flex justify-between items-center max-w-[1440px] mx-auto">
        <Sponsors img={assets.segment} text="Segment" />
        <Sponsors img={assets.goodwell} text="Goodwell" />
        <Sponsors img={assets.goodwell} text="Goodwell" />
        <Sponsors img={assets.screentime} text="Screentime" />
        <Sponsors img={assets.mastermail} text="Mastermail" />
        <Sponsors img={assets.segment} text="Shutterframe" />
      </div>
      <div className="mt-20">
        <h1 className="w-[523px] font-heading mx-auto text-4xl font-extrabold text-center">
          Top Travel Deals of the Month Handpicked for you
        </h1>
        <h1 className="w-[523px] mx-auto mt-6 font-medium text-center">
          Explore curated travel packages for every kind of traveler - whether
          you’re dreaming of a beach escape, a mountain adventure, or a vibrant
          city journey, there’s something special waiting for you
        </h1>

        <div className="px-14 max-w-[1440px] mx-auto mt-10 grid h-[968px]">
          <div className="grid grid-cols-3 grid-rows-2 gap-4 relative">
            <div className="rounded-3xl row-span-2 relative">
              <img
                src={assets.card_gallery1}
                className="relative z-0 h-full w-full bg-black rounded-3xl object-cover object-center filter brightness-[0.8]"
              />

              <div className="absolute bottom-10 text-white z-30 flex flex-col gap-12">
                <h1 className="text-[40px] font-heading font-medium text-start px-4 -mt-20">
                  Enjoy the Mesmerising Beauty of Nature
                </h1>

                <div className="w-[25rem] bg-white rounded-full h-[57px] mx-auto">
                  <div className="rounded-full h-full w-full p-2 flex gap-2 items-center justify-between">
                    {[
                      assets.card_gallery1,
                      assets.card_gallery1,
                      assets.card_gallery1,
                      assets.card_gallery1,
                    ].map((img, index) => (
                      <div className="w-20 h-11">
                        <img
                          src={img}
                          className="h-full w-full object-center rounded-full"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {card_gallery.map((card, index) => (
              <div
                className={`rounded-xl col-start-2 ${card.className}`}
                key={index}
              >
                <div className="w-[435px] h-[290px]">
                  <img
                    src={card.img}
                    className="h-full w-full object-cover rounded-xl filter brightness-[0.85]"
                  />
                </div>
                <div className="w-full flex flex-col gap-3 pt-6">
                  <h1 className="text-xl font-medium">{card.title}</h1>
                  <p className="text-xs">{card.description}</p>
                  <div className="flex justify-between items-center mt-2">
                    <p className="font-bold">{card.amount}</p>
                    <button className="cursor-pointer px-4 py-2 border rounded-full font-semibold text-xs">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3 */}
        <div className="mx-auto mt-20 max-w-[1440px] px-14">
          <h1 className="font-heading text-[32px] font-extrabold mx-auto w">
            Most Popular Lodges around the world{" "}
          </h1>
          <div className="flex items-center justify-between">
            <p className="text-black/50 font-medium">
              Explore our travel packages with this month with options for every
              traveler
            </p>
            <button className="flex items-center gap-2 cursor-pointer px-6 py-2 border rounded-full font-semibold text-xs">
              See all <img src={assets.forward_arrow} />
            </button>
          </div>

          <div className="flex items-center justify-between gap-8 mt-8">
            {card_gallery2.map((card, index) => (
              <div>
                <img
                  src={card.img}
                  className="h-[19rem] w-[19rem] object-cover object-center rounded-[14px] filter brightness-[0.85]"
                />
                <div className="w-full flex flex-col gap-3 pt-6">
                  <h1 className="text-xl font-medium">{card.title}</h1>
                  <p className="text-xs">{card.description}</p>
                  <div className="flex justify-between items-center mt-2">
                    <p className="font-bold">{card.amount}</p>
                    <button className="flex items-center gap-2 cursor-pointer px-6 py-2 border rounded-full font-semibold text-xs">
                      Book Now<img src={assets.forward_arrow} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
