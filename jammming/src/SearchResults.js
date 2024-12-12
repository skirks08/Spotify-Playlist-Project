import React from 'react';
import { Tracklist } from './Tracklist';
import './SearchResults.css';

export function SearchResults() {
  return (
    <div className="SearchResults">
      <h2>Results</h2>
      <Tracklist />
    </div>
  );
}