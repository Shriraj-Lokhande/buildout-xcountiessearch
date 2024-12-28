import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <nav className="navbar">
    <input 
      type="text" 
      className="searchInput"
      placeholder="Search for countries..." 
      value={searchTerm} 
      onChange={(e) => setSearchTerm(e.target.value)} 
    />
    </nav>
  );
};

export default SearchBar;
