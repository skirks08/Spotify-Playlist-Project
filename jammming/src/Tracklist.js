import React from 'react';
import { Track } from './Track';
import './Tracklist.css';

export function Tracklist({ tracks }) {
  return (
    <div className="Tracklist">
      {tracks.map((track) => (
        <Track
          key={track.id}  // Unique key to help React efficiently update the list
          name={track.name}
          artist={track.artist}
          album={track.album}
        />
      ))}

    </div>
  );
}