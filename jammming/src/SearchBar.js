import React from 'react';
import './SearchBar.css';

export function SearchBar() {
  return (
    <div className="SearchBar">
      <input placeholder="Enter A Song, Album, or Artist" />
      <button className="SearchButton">Search</button>
    </div>
  );
}