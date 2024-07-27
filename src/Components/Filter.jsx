import React from 'react'
import { RetreatLists } from '../Utils/Constants'

const Filter = () => {

    
    
  return (
    <div className="flex flex-col my-4 sm:flex-row justify-between items-center space-y-4 sm:space-y-0 text-black w-full">
  <div className="flex flex-col gap-4 sm:flex-row justify-evenly w-full sm:w-auto">
    <select className="border p-2 w-full sm:w-auto h-12 rounded-sm bg-cyan-600 text-white">
      <option value="">Filter by Date</option>
      <option value="2023-2024">2023-2024</option>
      <option value="2024-2025">2024-2025</option>
    </select>
    <select className="border p-2 w-full sm:w-auto h-12 rounded-sm bg-cyan-600 text-white">
      <option value="">Filter by Type</option>
      <option value="Yoga">Yoga</option>
      <option value="Meditation">Meditation</option>
      <option value="Detox">Detox</option>
    </select>
  </div>
  <input
    type="text"
    placeholder="Search retreats by title"
    className="w-full sm:w-1/3 h-12 rounded-sm bg-cyan-600 text-white placeholder-white focus:outline-none hover:border-cyan-500 border-2"
  />
</div>

  
  )
}

export default Filter