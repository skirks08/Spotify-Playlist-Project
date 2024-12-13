import React from 'react';
import './SearchBar.css';

export function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value); // Update search term as user types
  };

  const handleSearch = () => {
    onSearch(searchTerm); // Trigger search with the current term
  };

  return (
    <div className="SearchBar">
      <input
        placeholder="Enter A Song, Album, or Artist"
        value={searchTerm}
        onChange={handleInputChange} // Update state on input change
      />
      <button className="SearchButton" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}