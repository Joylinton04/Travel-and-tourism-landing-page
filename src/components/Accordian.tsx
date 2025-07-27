import React, { useState } from "react";
import { assets } from "../assets/assets";

type prop = {
  question: string;
  answer: string;
}

const Accordian = ({question, answer}: prop) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className={`flex flex-col gap-4 shadow-lg p-4 rounded-2xl cursor-pointer ${isOpen && 'bg-black'}`}
    >
      <div className="flex justify-between items-center">
        <h1 className={`font-semibold text-xl ${isOpen ? "text-white" : "text-gray-700"} mdd:text-base`}>
          {question}
        </h1>
        <img
          src={assets.forward_arrow}
          className={`${
            isOpen ? "-rotate-90" : "rotate-90"
          } transition-all duration-200`}
        />
      </div>
      <div
        className={`${
          isOpen ? "max-h-[200px] text-white/80" : "max-h-0"
        } overflow-hidden transition-all duration-200`}
      >
        <p>
          {answer}
        </p>
      </div>
    </div>
  );
};

export default Accordian;
