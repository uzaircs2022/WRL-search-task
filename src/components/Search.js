import React, { useRef } from 'react';

const Search = ({ onSearch }) => {
  const searchRef = useRef();

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchRef.current.value.toUpperCase());
  };

  return (
    <form className="search-form">
      <input
        type="text"
        ref={searchRef}
        placeholder="Enter Callsign"
        className="search-input"
      />
      <button type="submit" className="submit-btn" onClick={handleSearch}>
        Submit
      </button>
    </form>
  );
};

export default Search;
