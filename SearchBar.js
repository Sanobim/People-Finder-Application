import React from "react";

const SearchBar = ({ searchQuery, onSearch }) => {
  return (
    <input
      type="text"
      value={searchQuery}
      onChange={(e) => onSearch(e.target.value)}
      placeholder="Search by name, father's name, or ID"
      className="border rounded p-2 w-full mb-5"
    />
  );
};

export default SearchBar;
