import React from 'react'

const HeroSection = () => {
  return (
    <div className='container max-w-7xl mx-auto'>
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className='text-h1 font-bold md:max-w-[59rem] inline-flex items-end justify-center'>
          We are transforming the way people hires
          <img
            src="/image/arrow.svg"
            alt="arrow"
            className="ml-2 h-6 inline-block"
          />
        </h1>
        <p className='text-p1 mt-6 text-grey-primary'>
          We built a leading platform that connects employers with top healthcare professionals across the country.
        </p>
      </div>

      {/*  */}
      <div className="flex items-center flex-wrap justify-between">
        <div className="bg-pink-primary p-8 rounded-2xl">
          <img src="/image/about.svg" alt="" />
        </div>
        {/*  */}
        <div className="">
          <p className='text-p4 text-grey-primary'>Our Mission</p>
          <h2 className="text-h2">Our Mission is to empower every tech professional</h2>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
