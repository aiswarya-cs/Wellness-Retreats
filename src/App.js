import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import RetreatList from './Components/RetreatList';
import SearchBar from './Components/SearchBar';
import Filter from './Components/Filter';
import Pagination from './Components/Pagination';


const App = () => {
  const [retreats, setRetreats] = useState([]);
  const [filteredRetreats, setFilteredRetreats] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetch(`https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats?page=${currentPage}&limit=5`)
      .then(response => response.json())
      .then(data => {
        setRetreats(data);
        setFilteredRetreats(data);
        setTotalPages(Math.ceil(data.length / 5));
      });
  }, [currentPage]);

  const handleFilterChange = ({ date, type }) => {
    let filtered = retreats;
    if (date) filtered = filtered.filter(retreat => retreat.date === date);
    if (type) filtered = filtered.filter(retreat => retreat.type === type);
    setFilteredRetreats(filtered);
  };

  const handleSearch = (query) => {
    fetch(`https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats?search=${query}`)
      .then(response => response.json())
      .then(data => setFilteredRetreats(data));
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Header/>
      <Filter onFilterChange={handleFilterChange} />
      <SearchBar onSearch={handleSearch} />
      <RetreatList retreats={filteredRetreats} />
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  );
};

export default App;
