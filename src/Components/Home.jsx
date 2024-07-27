import React from 'react'
import wellness from "../assets/yoga-retreat-bangalore-img-1.jpg"

const Home = () => {
  return (
    <div className="w-full h-auto bg-zinc-900 my-2 rounded-sm text-white p-5 sm:p-10 ">
    <img src={wellness} alt="" className="w-full h-auto object-cover mb-5 sm:mb-10" />
    <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3">Discover Your Inner Peace</h1>
    <p className="text-sm sm:text-base md:text-lg lg:text-xl">Join us for a series of wellness retreats designed to help you find tranquility and rejuvenation.</p>
</div>

  )
}

export default Home