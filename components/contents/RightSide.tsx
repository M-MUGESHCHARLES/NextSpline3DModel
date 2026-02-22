import React from 'react'
import { HiOutlineExternalLink } from 'react-icons/hi';
import { IoDiamondOutline, IoSparklesOutline } from 'react-icons/io5';

export const RightSide = () => {
  return (
    <div className="flex justify-center items-center h-full items-center pt-10 md:pt-0 md:pl-6">
      <div className="">
        <span
          className="font-sans rounded-2xl px-4 py-2 border border-white text-[#D6E6F2] text-sm font-semibold flex justify-center items-center gap-2 w-max"
          style={{ borderWidth: "thin" }}
        >
          <IoSparklesOutline size={18} className="mt-0.5" />
          Innovative Experience
        </span>
        <h1 className=" font-heading text-5xl mt-5 mb-8 text-[#D6E6F2]">
          Build Interactive <br /> 3D Experiences in React
        </h1>
        <p className="font-sans mb-5 text-gray-300">
          Create immersive, high-performance 3D experiences directly in your
          React applications. Fast, modern, and built for the future.
        </p>
        <button className="font-sans flex flex-row justify-between items-center gap-5 px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition">
          Explore Features <HiOutlineExternalLink className="text-black" />
        </button>
      </div>
    </div>
  );
}
