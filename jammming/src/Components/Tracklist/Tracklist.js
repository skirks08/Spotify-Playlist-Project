import React from 'react';
import { Track } from '../Track/Track';
import './Tracklist.css';

export function Tracklist({ tracks, removeTrackFromPlaylist }) {
  return (
    <div className="Tracklist">
      {tracks.map((track) => (
        <Track 
          key={track.id} 
          name={track.name} 
          artist={track.artist} 
          album={track.album} 
          removeTrackFromPlaylist={removeTrackFromPlaylist} 
        />
      ))}
    </div>
  );
}