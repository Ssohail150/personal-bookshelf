// src/components/SearchBar.js
import React from 'react';
import './SearchBar.css';

const SearchBar = ({ query, onQueryChange }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
        placeholder="Search for books..."
      />
    </div>
  );
};

export default SearchBar;
