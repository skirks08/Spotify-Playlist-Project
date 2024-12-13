import React from 'react';
import './Track.css';

export function Track({ name, artist, album, removeTrackFromPlaylist }) {
  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{name}</h3>
        <p>{artist} | {album}</p>
      </div>
      <div className="Track-actions">
        <button 
          className="Track-action remove" 
          onClick={() => removeTrackFromPlaylist({ name, artist, album })}
        >
          -
        </button>
      </div>
    </div>
  );
}