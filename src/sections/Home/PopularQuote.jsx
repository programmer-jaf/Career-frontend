import React from 'react'
import { RiDoubleQuotesL } from 'react-icons/ri'

const PopularQuote = () => {
  return (
    <div className='bg-yellow-primary rounded-3xl container max-w-7xl mx-auto p-6 md:p-10 mt-8'>
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Image */}
        <div className="w-full md:w-1/2">
          <img 
            src="/image/Highlight.png" 
            alt="quote" 
            className='w-fit h-auto object-contain' 
          />
        </div>
        
        {/* Quote */}
        <div className="w-full md:w-1/2 flex flex-col gap-2">
          <RiDoubleQuotesL className="text-6xl text-black-primary" />
          <h4 className='text-p1 text-black-primary leading-snug'>
            "They are trustworthy, reliable, efficient, and prompt due to their concern for client care. They continue to provide us with a professional and consistent service to match our job specification, every time"
          </h4>
          <p className='text-black-primary text-h3-sb font-semibold'>Programmer Jaf</p>
          <p className='text-gray-600 text-p2'>Founder & CEO @Career.</p>
        </div>
      </div>
    </div>
  )
}

export default PopularQuote
