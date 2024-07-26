import React from 'react'

const RetreatList = ({ retreats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
    {retreats.map(retreat => (
      <div key={retreat.id} className="border p-4">
        <img src={retreat.image} alt={retreat.title} className="w-full h-48 object-cover" />
        <h2 className="text-xl font-bold mt-2">{retreat.title}</h2>
        <p>{retreat.description}</p>
        <p>{retreat.date}</p>
        <p>{retreat.location}</p>
        <p>${retreat.price}</p>
      </div>
    ))}
  </div>
  )
}

export default RetreatList