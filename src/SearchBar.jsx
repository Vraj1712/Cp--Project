import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = () => {
  const [searchText, setSearchText] = useState('');

  const handleChange = event => {
    setSearchText(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    // Add code here to handle search submission
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        value={searchText}
        onChange={handleChange}
        placeholder="Search"
      />
      <button type="submit">Go</button>
    </form>
  );
};

export default SearchBar;
