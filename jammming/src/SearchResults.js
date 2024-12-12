import React from 'react';
import { Tracklist } from './Tracklist';
import './SearchResults.css';

export function SearchResults({ tracks }) {
  return (
    <div className="SearchResults">
      <h2>Results</h2>
      <Tracklist tracks={tracks} />
    </div>
  );
}