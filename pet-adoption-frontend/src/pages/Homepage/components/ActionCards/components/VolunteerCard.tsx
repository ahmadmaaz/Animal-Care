import React from 'react'

type Props = {}

function VolunteerCard({}: Props) {
  return (
    <div className='relative group w-[24rem] h-[30rem] cursor-pointer rounded-md  text-white shadow-md shadow-black' >
        <h1 className='absolute  z-10 top-10 left-12  font-mono text-3xl font-bold '>Volunteer</h1>
        <div className="group  blur-none group-hover:blur-md  bg-[url(/src/assets/volunteerImg.jpg)]  w-full h-full bg-cover bg-center flex flex-col justify-between py-10 px-12">
        </div>
        <div className='absolute z-10  opacity-0 bottom-10 left-12 right-12  group-hover:opacity-100  transition-all duration-300 ' >
                <p className=''>A few hours a week with the animals means the world to them, not to mention , the memories that will stay with you for a lifetime.</p>
                <a href='/'>
                <button className="py-2 px-6 text-white bg-[#1c2e58] border-md font-mono mt-8 ">
                    Know More
                </button>
                </a>
        </div>
    </div>
  )
}

export default VolunteerCard