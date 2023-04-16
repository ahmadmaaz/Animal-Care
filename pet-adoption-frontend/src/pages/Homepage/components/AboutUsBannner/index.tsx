import React from 'react'
import DogPic from "../../../../assets/dog-illustration-nobg.png"
type Props = {}

function AboutUsBanner({}: Props) {
  return (
    <div className="bg-[#ffc52d] flex flex-col md:flex-row justify-center items-center py-12">
      <img src={DogPic} />
      <div className='px-6 md:px-0'> 
        <p className="font-mono font-bold w-full  md:w-[25rem] lg:w-[30rem] text-lg">
          MO4PAWS is a non-profit pet adoption and rescue organization dedicated
          to providing loving homes for abandoned, neglected, and abused
          animals. Their mission is to improve the lives of animals by providing
          shelter, medical care, and rehabilitation, as well as education and
          community outreach programs.
        </p>
        <a href='/'>
          <button className="py-2 px-6 text-white bg-black border-md font-mono mt-8 ">
            Know More
          </button>
        </a>
      </div>
    </div>
  );
}

export default AboutUsBanner