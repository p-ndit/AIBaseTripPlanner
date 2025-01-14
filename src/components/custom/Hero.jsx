import React from 'react'
import { Button } from '../ui/Button'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className='flex flex-col items-center mx-56 gap-9'>
      <h1
        className='font-extrabold text-[40px] text-center mt-16'
      >
        <span className='text-[#f56551]'>Discover Your Next Adventure with AI:</span> Personalized Itineraries at Your FingerTip</h1>
        <p className='text-xl text-gray-500 text-center'>Your Personal trip planner and travel curator, creating custom itineraries tailored to your intrest and budget</p>

        <Link to={'/create-trip'}>
          <Button className="bg-black text-white">Get Started, It's Free</Button>
        </Link>
    </div>
  )
}

export default Hero
