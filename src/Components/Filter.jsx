import React, { useState } from 'react'

const Filter = ({ onFilterChange }) => {
    const [date, setDate] = useState('');
    const [type, setType] = useState('');
  
    const handleFilter = () => {
      onFilterChange({ date, type });
    };
  return (
    <div>
         <div className="flex space-x-4 p-4">
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="border p-2" />
      <select value={type} onChange={(e) => setType(e.target.value)} className="border p-2">
        <option value="">All Types</option>
        <option value="Yoga">Yoga</option>
        <option value="Meditation">Meditation</option>
        <option value="Detox">Detox</option>
      </select>
      <button onClick={handleFilter} className="bg-blue-500 text-white p-2">Filter</button>
</div>
    </div>
  )
}

export default Filter