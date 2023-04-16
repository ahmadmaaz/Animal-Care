import React from 'react'

type Props = {}

function DonateCard({}: Props) {
  return (
    <div className="relative group w-[24rem] h-[30rem] cursor-pointer rounded-md shadow-md shadow-black">
      <h1 className="absolute  z-10 top-10 left-12  font-mono text-3xl font-bold ">
        Donate
      </h1>
      <div className="group  blur-none group-hover:blur-md  bg-[url(/src/assets/Donate.jpg)]  w-full h-full bg-cover bg-center flex flex-col justify-between py-10 px-12"></div>
      <div className="absolute z-10  opacity-0 bottom-10 left-12 right-12  group-hover:opacity-100  transition-all duration-300 ">
        <p className="">
        No amount is too small. It goes a long way to help animals at the rehab centre
        </p>
        <a href="/">
          <button className="py-2 px-6 text-white bg-[#1c2e58] border-md font-mono mt-8 ">
            Know More
          </button>
        </a>
      </div>
    </div>
  );
}

export default DonateCard