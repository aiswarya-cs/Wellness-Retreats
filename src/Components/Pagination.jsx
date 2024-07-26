import React from 'react'

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-center p-4">
    {[...Array(totalPages).keys()].map(page => (
      <button key={page} onClick={() => onPageChange(page + 1)} className={`p-2 ${currentPage === page + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
        {page + 1}
      </button>
    ))}
  </div>
  )
}

export default Pagination;