import React from 'react'

type Props = {}

function AdoptCard({}: Props) {
  return (
    <div className="relative group w-[24rem] h-[30rem] cursor-pointer rounded-md shadow-md shadow-black">
      <h1 className="absolute  z-10 top-10 left-12  font-mono text-3xl font-bold ">
        Adopt
      </h1>
      <div className="group  blur-none group-hover:blur-md  bg-[url(/src/assets/cat-adoption.jpg)]  w-full h-full bg-cover bg-center flex flex-col justify-between py-10 px-12"></div>
      <div className="absolute z-10  opacity-0 bottom-10 left-12 right-12  group-hover:opacity-100  transition-all duration-300 ">
        <p className="">
          Don’t buy or breed animals while there are many animals deprived of a
          good home. Come visit us & you might just meet your soulmate.
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

export default AdoptCard