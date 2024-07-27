import React from 'react';
import Header from './Components/Header';
import RetreatList from './Components/RetreatList';
import SearchBar from './Components/SearchBar';
import Filter from './Components/Filter';
import Pagination from './Components/Pagination';
import Home from './Components/Home';

const App = () => {


  return (
    <div className='m-8'>
      <Header/>
      <Home/>
      <Filter />
      <SearchBar />
      <RetreatList/>
      <Pagination />
    </div>
  );
};

export default App;
