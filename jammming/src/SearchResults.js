import React from 'react';
import { Tracklist } from './Tracklist';
import './SearchResults.css';

export function SearchResults({ SearchResults, addTrackToPlaylist }) {
  return (
    <div className="SearchResults">
      <h2>Results</h2>
      <div className="Tracklist">
        {searchResults.map((track) => (
          <div className="Track" key={track.id}>
            <div className="Track-information">
              <h3>{track.name}</h3>
              <p>{track.artist} | {track.album}</p>
            </div>
            <button 
              className="Track-action"
              onClick={() => addTrackToPlaylist(track)}
            >
              +
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}